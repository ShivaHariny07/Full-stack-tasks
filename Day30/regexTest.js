// Sample Regular Expressions

const tests = [
  { text: "hello@example.com", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, desc: "Email" },
  { text: "9876543210", regex: /^[6-9]\d{9}$/, desc: "Indian Phone Number" },
  { text: "2025-06-28", regex: /^\d{4}-\d{2}-\d{2}$/, desc: "Date Format YYYY-MM-DD" },
  { text: "ABcd1234", regex: /^[A-Za-z0-9]{8}$/, desc: "Alphanumeric 8 chars" },
];

tests.forEach(({ text, regex, desc }) => {
  console.log(`${desc}: ${regex.test(text)} (${text})`);
});
