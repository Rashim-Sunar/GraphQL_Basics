const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userResolver = {
    Query: {
        users: async( _ , __ , { user }) => {
            console.log(user);
            if(!user) throw new Error("Unauthorized!");
            return await User.find().sort({ createdAt: -1 });
        },

        user: async( _ , { id }) => {
            return await User.findById(id);
        }
    },

    Mutation: {
        createUser: async( _ , {name, email}) => {
            const exists = await User.findOne({email});
            if( exists ) throw new Error("Email already in use");
            const user = new User({
                name,
                email
            });

            return await user.save();
        },
        updateUser: async( _ , {id, name, email}) => {
            const update = {};
            if(name != undefined ) update.name = name;
            if(email != undefined ) update.email = email;
            return await User.findByIdAndUpdate(id, update, {new : true});
        },
        deleteUser: async( _ , {id}) => {
            const res = await User.findByIdAndDelete(id);
            return !!res;
        },

        registerUser: async( _ , { name, email, password}) => {
            const exists = await User.findOne({email});
            if(exists) throw new Error("Email already exists");

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({name, email, password: hashedPassword});
            await newUser.save();

            const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });

            return {token, user: newUser};
        },

        loginUser: async( _ , {email, password}) => {
            const user = await User.findOne({email});
            if(!user)  throw new Error("User not found!");

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) throw new Error("Invalid credentials");

            const token = jwt.sign({ userId: user.id}, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });

            return { token, user };
        }
    }
};

module.exports = userResolver;