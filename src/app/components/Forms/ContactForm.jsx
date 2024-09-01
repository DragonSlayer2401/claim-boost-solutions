'use client';
import React from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './form.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      if (data.files && data.files.length > 0) {
        Array.from(data.files).forEach((file) => {
          formData.append('uploadedFiles', file);
        });
      }

      const response = await axios.post('/api/email', formData);

      if (response.data.success === true) {
        toast.success('Email sent successfully', { theme: 'colored', ariaLive: 'polite' });
        reset();
      } else {
        toast.error('Failed to send email. Please try again.', {
          theme: 'colored',
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        theme: 'colored',
      });
      reset();
    }
  };

  return (
    <>
      <Form
        className="bg-white mx-auto rounded-lg p-10 form"
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group className="mb-4">
          <Form.Label htmlFor="name" className="text-sm">
            Full Name
          </Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="p-3"
            {...register('name', {
              required: 'Full Name is required',
              pattern: {
                value:
                  /^\s*[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*\s+[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*\s*$/,
                message: 'Invalid name',
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 !text-sm">{errors.name.message}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="email" className="text-sm">
            Email Address
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="p-3"
            {...register('email', {
              required: 'Email Address is required',
              pattern: {
                value:
                  /^(?![_.-])[a-zA-Z0-9._%+-]{1,64}(?<![_.-])@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 !text-sm">{errors.email.message}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="subject" className="text-sm">
            Subject
          </Form.Label>
          <Form.Control
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            className="p-3"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="text-red-500 !text-sm">{errors.subject.message}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="message" className="text-sm">
            Message
          </Form.Label>
          <Form.Control
            as="textarea"
            id="message"
            name="message"
            placeholder="Enter your message"
            className="p-3"
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 20,
                message: 'Message must be at least 20 characters',
              },
            })}
          />
          {errors.message && (
            <p className="text-red-500 !text-sm">{errors.message.message}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="files" className="text-sm">
            Attach Files
          </Form.Label>
          <Form.Control
            type="file"
            multiple
            id="files"
            name="files"
            className="p-3"
            {...register('files')}
          />
        </Form.Group>
        <Button
          type="submit"
          className="block mx-auto rounded-lg py-3 px-6 font-bold text-lg"
          disabled={isSubmitting}
        >
          {!isSubmitting ? (
            'Send Message'
          ) : (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden={true}
              />{' '}
              Sending...
            </>
          )}
        </Button>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        pauseOnFocusLoss
        role="alert"
        aria-live="assertive"
      />
    </>
  );
};

export default ContactForm;
