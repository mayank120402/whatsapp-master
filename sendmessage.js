const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.messages.create({
  from: 'whatsapp:+14155238886',       // Twilio का Sandbox नंबर
  to: 'whatsapp:+919302217201',        // आपका WhatsApp नंबर
  body: 'नमस्ते, यह Twilio‑WhatsApp संदेश है!'
})
.then(message => console.log('Message sent, SID:', message.sid))
.catch(error => console.error('Send error:', error));





app.post('/webhook', (req, res) => {
  const from = req.body.From;
  const msg = req.body.Body;
  console.log(`Incoming from ${from}: ${msg}`);
  
  // यहाँ आप अपने logic जैसे OpenAI reply आदि जोड़ सकते हैं

  res.send('<Response></Response>');
});
