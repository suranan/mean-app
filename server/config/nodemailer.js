module.exports = {
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.email,
        pass: process.env.emailpassword
    }
}