import React, { useState } from 'react';
import FormInput from './Form/FormInput';
import FormTextarea from './Form/FormTextarea';
import SubmitButton from './Form/SubmitButton';
import { validateEmail, validatePhone, validateRequired, validateLength } from './Form/validators';
import { useToast } from './Toast/ToastContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { addToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://ruipbuildingcontracting.com/process-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        setSubmitStatus('success');
        addToast('Thank you for your message. We\'ll get back to you soon!', 'success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        addToast('Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      setSubmitStatus('error');
      addToast('An error occurred. Please try again later.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          id="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={(value) => setFormData(prev => ({ ...prev, firstName: value }))}
          onValidate={(value) => validateRequired(value, 'First name')}
          required
          disabled={isLoading}
        />
        <FormInput
          id="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={(value) => setFormData(prev => ({ ...prev, lastName: value }))}
          onValidate={(value) => validateRequired(value, 'Last name')}
          required
          disabled={isLoading}
        />
      </div>

      <FormInput
        id="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
        onValidate={validateEmail}
        required
        disabled={isLoading}
      />

      <FormInput
        id="phone"
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
        onValidate={validatePhone}
        disabled={isLoading}
      />

      <FormInput
        id="subject"
        label="Subject"
        value={formData.subject}
        onChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}
        onValidate={(value) => validateLength(value, 3, 100)}
        required
        disabled={isLoading}
      />

      <FormTextarea
        id="message"
        label="Message"
        value={formData.message}
        onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
        onValidate={(value) => validateLength(value, 10, 1000)}
        required
        rows={6}
        disabled={isLoading}
      />

      {submitStatus === 'success' && (
        <div className="bg-green-50 text-green-800 rounded-lg p-4 animate-fadeIn">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 text-red-800 rounded-lg p-4 animate-fadeIn">
          Something went wrong. Please try again later.
        </div>
      )}

      <SubmitButton isLoading={isLoading}>
        Send Message
      </SubmitButton>
    </form>
  );
};

export default ContactForm;