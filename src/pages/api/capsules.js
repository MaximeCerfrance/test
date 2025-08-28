export default function handler(req, res) {
  if (req.method === 'POST') {
    // TODO: implement capsule creation with encryption and blockchain anchoring
    return res.status(201).json({ message: 'Capsule created (stub)' });
  }

  res.status(200).json({ message: 'Capsule API stub' });
}
