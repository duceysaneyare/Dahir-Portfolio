
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use EmailJS to send the form data - using send instead of sendForm
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Dahir",
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_l6f85vh", // Your EmailJS service ID
        "template_bc1ct57", // Your EmailJS template ID
        templateParams,
        "_fUn8Di61Prf2a-DW" // Your EmailJS public key
      )
      .then(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent successfully!",
          description: "Your message has been sent to tuuryaredaahir@gmail.com. I'll get back to you soon.",
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("EmailJS error:", error);
        toast({
          variant: "destructive",
          title: "Failed to send message",
          description: "Please try again or contact me directly at tuuryaredaahir@gmail.com.",
        });
      });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+252 616174492",
      href: "tel:+252616174492",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "tuuryaredaahir@gmail.com",
      href: "mailto:tuuryaredaahir@gmail.com",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub",
      value: "Dahir Muse",
      href: "https://github.com/duceysaneyare",
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Dahir Muse ",
      href: "https://www.linkedin.com/in/duceysaneyare/",
    },
  ];

  return (
  <section id="contact" className="py-20 px-4">
  <div className="container mx-auto max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-portfolio-purple dark:text-portfolio-purple-light mb-12">
      Let’s Connect
    </h2>

    <div className="flex flex-col lg:flex-row gap-10">
      {/* Contact Info */}
      <div className="lg:w-1/3 glassmorphism p-8 rounded-xl shadow-md">
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-portfolio-blue-lighter dark:border-gray-700">
            <img src="/dahir.png" alt="Dahir Muse" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Dahir Muse Abdulle</h3>
          <p className="text-portfolio-blue dark:text-portfolio-blue-light font-medium">Full-Stack Developer</p>
        </div>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          I’m open to freelance and collaborative work. If you have a project or idea — let’s chat!
        </p>

        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.label === "GitHub" || item.label === "LinkedIn" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-center items-start gap-1 sm:gap-4 p-3 transition-colors group"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-portfolio-blue-lighter text-portfolio-blue dark:bg-blue-900/30 dark:text-blue-300 mr-4 group-hover:bg-portfolio-blue group-hover:text-white">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="text-gray-800 dark:text-white font-medium">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">Based in Mogadishu, Somalia</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:w-2/3 glassmorphism p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Get In Touch</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I’d love to hear from you! Fill out the form and I’ll reply shortly.
        </p>

        {formSubmitted ? (
          <div className="py-12 text-center animate-fadeIn">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 mb-6">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Thank You!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your message has been sent to tuuryaredaahir@gmail.com.
            </p>
            <Button onClick={() => setFormSubmitted(false)} className="rounded-full">
              Send Another Message
            </Button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dahir"
                  required
                  className="rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="rounded-lg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let’s discuss your project..."
                required
                className="min-h-[150px] rounded-lg"
              />
            </div>

            <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A7.96 7.96 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  </div>
</section>

  );
};

export default ContactSection;
