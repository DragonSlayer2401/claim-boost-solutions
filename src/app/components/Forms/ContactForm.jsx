'use client';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './form.css';
import { Container } from 'postcss';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
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
            {...register('name', { required: 'Full Name is required' })}
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
            {...register('message', { required: 'Message is required' })}
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
        >
          Send Message
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
