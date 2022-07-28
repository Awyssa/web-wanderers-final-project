import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../config/prisma";

const registerUser = async(req: { body: { email: any; password: any; firstName: any; lastName: any; phoneNumber: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: unknown; }): any; new(): any; }; }; }) => {
	const { email, password, firstName, lastName, phoneNumber } = req.body;

	try {
		const newUser = await prisma.user.create({
			data: {
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName,
				phoneNumber: phoneNumber,
				userType: 500,
			},
		});

		console.log("new user ", newUser.firstName);
		return res.status(202).json({ message: `Welcome ${newUser.email}!` });
	} catch (err) {
		console.log("error", err);
		return res.status(422).json({ message: err });
	}
};

const loginUser = async(req: { body: { userEmail: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; json: { (arg0: { message: any; token?: string; }): any; new(): any; }; }; }) => {
	const userEmail = req.body.userEmail;
	const password = req.body.password;

	if(!userEmail) res.status(404).send("No id?");
	console.log(userEmail);
	try {
		const userToLogin = await prisma.user.findUnique({where: {email: userEmail,},});

		// console.log(userToLogin, password);
		if(!userToLogin)
			throw new ReferenceError("Woah! Have you registered?");


		if(!bcrypt.compare(password, userToLogin.password))
			throw new ReferenceError("Hmm... That's not correct");


		const token = jwt.sign({ sub: userToLogin.id }, "abc", {expiresIn: "7 days",});

		return res
		.status(200)
		.json({ message: `Welcome back ${userToLogin.email}`, token });
	} catch (err) {
		console.log("AUTH ERROR!", err);
		return res.status(422).json({ message: err });
	}
};

module.exports = { loginUser, registerUser };
