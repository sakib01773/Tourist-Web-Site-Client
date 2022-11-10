import React from 'react';
import useTitle from '../../hook/useTitle';
import "./Blog.css"

const Blog = () => {
    useTitle("Blog")
    return (
        <div className='container mx-auto my-20 grid lg:grid-cols-2 gap-10'>

            <div className="card w-full  shadowbox bg-emerald-50 text-dark my-10 ">
                <div className="card-body">
                    <h1 className="card-title">1. Difference between SQL and NoSQL?</h1>
                    <p>From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems RDBMS and the Structured Query Language SQL used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What is more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.

                        Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.

                        To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems DBMS and languages, as well as the situations each is best-suited for, and how the landscape is changing.</p>

                </div>
            </div>

            <div className="card w-full  shadowbox  bg-emerald-50 text-dark my-10">
                <div className="card-body">
                    <h1 className="card-title">2. What is JWT, and how does it work?</h1>
                    <p>JSON Web Token JWT is an open standard RFC 7519 for securely transmitting information between parties as JSON object.

                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity ProviderIdP. So the integrity and authenticity of the token can be verified by other parties involved.

                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore database to save session information.
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>

                </div>
            </div>

            <div className="card w-full  shadowbox  bg-emerald-50 text-dark my-10">
                <div className="card-body">
                    <h1 className="card-title">3.What is the difference between javascript and NodeJS?</h1>
                    <p>JavaScript is a lightweight, object-oriented programming language for creating dynamic HTML pages with combined effects. When launched in the V8 engine or via the node interpreter, Node.js typically represents several objects and functions accessible to JavaScript code.1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>

                </div>
            </div>

            <div className="card w-full  shadowbox  bg-emerald-50 text-dark my-10">
                <div className="card-body">
                    <h1 className="card-title">4.How does NodeJS handle multiple requests at the same time?</h1>
                    <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;