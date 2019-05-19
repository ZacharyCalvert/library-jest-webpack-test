import { sendMeToGoogle } from "./service.js"

Object.defineProperty(window, 'location', {
  writable: true,
  value: {}
});

it('should send me to google', () => {
   expect(window.location.href).not.toBe("https://www.google.com");
   sendMeToGoogle();
   expect(window.location.href).toBe("https://www.google.com");
}); 
