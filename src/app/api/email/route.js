import sendEmail from '@/utils/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Get the form data from the request
    const formData = await request.formData();

    // Extract the fields and files from the form data
    const name = formData.get('name');
    const subject = formData.get('subject');
    const email = formData.get('email');
    const message = formData.get('message');
    const uploadedFiles = formData.getAll('uploadedFiles');

    // Format the uploaded files
    const formattedFiles = await Promise.all(uploadedFiles.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()), // Convert the file to a buffer (binary data)
      contentType: file.type,
    })));

    // Create an object with the email data
    const emailData = {
      name,
      subject,
      email,
      message,
      files: formattedFiles,
    };

    const messageID = (
      await sendEmail(
        `${emailData.name} <${emailData.email}>`,
        emailData.subject,
        emailData.message,
        emailData.files
      )
    ).messageId;

    if (messageID) {
      // Return a successful response
      return NextResponse.json(
        {
          success: true,
          message: 'Email sent successfully',
        },
        { status: 200 }
      );
    } else {
      // Return an error response if the email failed to send
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    // Log the error and return an error response
    console.error('POST handler failed:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email',
      },
      { status: 500 }
    );
  }
}
