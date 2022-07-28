const UserDetails = require('../../models/Userdetails');

exports.getUser = async (req, res) => {
    try {
        const { user } = req.query;

        const User = await UserDetails.findOne({ userName: user });

        if (User) {
            return res
                .status(200)
                .json({ User, message: "This is your details" });
        } else {
            return res
                .status(400)
                .json({ message: "User does not exits" });
        }

    } catch (error) {
        return res.status(500).json({
            error: error.message || "error while fetching user details"
        });
    }
}

exports.addUser = async (req, res) => {
    try {
        const { username, name, phone, address, city, state, country } = req.body;
        if (!username || !name || !phone || !address || !city || !state) {
            res.status(400).json({ message: "enter all the fields properly" });
        }

        const user = new UserDetails({
            userName: username,
            name,
            phoneNumber: phone,
            address,
            city,
            state,
            country
        });
        const data = await user.save();
        return res
            .status(200)
            .json({ data, message: "user details saved successfully" });

    } catch (error) {
        return res.status(500).json({
            error: error.message || "error while save user details"
        });
    }
}

exports.editUser = async (req, res) => {
    try {
        const { username, name, phone, address, city, state, country } = req.body;

        const user = await UserDetails.findOne({ userName: username });

        if (user) {
            const updateUser = await UserDetails.findOneAndUpdate({ userName: username }, {
                userName: username,
                name,
                phoneNumber: phone,
                address,
                city,
                state,
                country
            }, { new: true });

            return res
                .status(200)
                .json({ updateUser, message: "user details updated successfully" });
        } else {
            return res
                .status(400)
                .json({ message: "User does not exits" });
        }

    } catch (error) {
        return res.status(500).json({
            error: error.message || "error while updating user details"
        });
    }
}