import multer from 'multer';

const upload = multer({ dest: 'uploads' })


export default upload;


/* 
User
what is the use of multer

ChatGPT
Multer is a middleware for handling multipart/form-data, which is primarily used for handling file uploads 
in Node.js. It's particularly useful when working with frameworks like Express.js.

Here's a breakdown of its use:

File Uploads: Multer simplifies the process 
of handling file uploads in Node.js applications. It allows you to easily process files that are uploaded via HTTP requests.

Multipart Form 
Handling: When a client submits a form with a file input (<input type="file">), the data is sent as multipart/form-data. Multer parses 
this data and makes it accessible in your Express.js routes or middleware.

Configuration Options: Multer provides various configuration options, such as specifying 
the destination directory for uploaded files, setting limits on the size and number of files uploaded, renaming files, and more. This 
flexibility allows you to tailor the file upload functionality to your specific needs.

Integration with Express.js: Multer seamlessly integrates with Express.js, making 
it easy to incorporate file upload functionality into your Express.js application. You can use it as middleware in your route handlers 
to process file uploads.

Overall, Multer simplifies the handling of file uploads in Node.js applications, providing a convenient and efficient way to 
manage multipart/form-data requests. 
*/



