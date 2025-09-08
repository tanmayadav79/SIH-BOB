const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, email, college, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser || existingUsername) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const user = await prisma.user.create({
      data: {
        username,
        email,
        college,
        password,
      },
    });

    return res.status(201).json({ user, message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'User creation failed' });
  }
};
