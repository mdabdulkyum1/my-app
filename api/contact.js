// api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Extract form data from request body
        const { name, email, message } = req.body;

        // Handle the form data (e.g., send email, save to database)
        // For now, just respond with a success message
        res.status(200).json({ status: 'Message sent successfully!' });
    } else {
        // Method Not Allowed
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
