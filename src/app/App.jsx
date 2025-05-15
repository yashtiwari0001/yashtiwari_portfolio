import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Contact from './Contact';
import Waves from './Waves';
// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/cv.pdf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

//import images
import Ataa from '../assets/images/Ataa.png';
import Kasper from '../assets/images/Kasper.png';
import Leon from '../assets/images/Leon.png';
import SokoNumber from '../assets/images/SokoNumber.png';
import GlobalShare from '../assets/images/GlobalShare.png';

// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [
	{
		name: 'HTML 5',
		icon: <AiFillHtml5 size="25px" color="white" />,
		cssName: "html"
	},
	{
		name: 'CSS 3',
		icon: <BiLogoCss3 size="25px" color="white" />,
		cssName: "css"
	},
	{
		name: 'Java Script',
		icon: <BiLogoJavascript size="25px" color="white" />,
		cssName: "java-script"
	},
	{
		name: 'React',
		icon: <FaReact size="25px" color="white" />,
		cssName: "react"
	},
	{
		name: 'React Query',
		icon: <SiReactquery size="25px" color="white" />,
		cssName: "react-query"
	},
	{
		name: 'Responsive Design',
		icon: <FaMobileAlt size="25px" color="white" />,
		cssName: "responsive"
	},
	{
		name: 'Git',
		icon: <BsGit size="25px" color="white" />,
		cssName: "git"
	},
	{
		name: 'Python',
		icon: <BiLogoJava size="25px" color="white" />,
		cssName: "java"
	},
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	},
	{
		name: 'TypeScript',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	},
	{
		name: 'Next JS',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}

];

const projects = [
	{
		name: 'CorpValet',
		link: 'https://corpvalet.netlify.app',
		description: 'CorpValet supports entrepreneurs in starting their businesses in the USA. I developed this website using Vite, React, Corus, Express, Material UI, and JavaScript. Web3Form API was implemented for secure form handling, and Stripe was integrated for seamless payment processing.',
		image: GlobalShare
	},
	{
		name: `Museum Ticket`,
		link: 'https://nationalmuseum-chatbot.netlify.app',
		description: "This is a hackathon project where I designed and developed the frontend using HTML, CSS, and JavaScript. The system facilitates online ticket booking for museum visits, enhancing user accessibility and convenience.",
		image: Ataa
	},
	{
		name: 'LiveVista',
		link: 'https://thelifevista.com',
		description: 'LiveVista is an e-commerce platform specializing in pool products, serving customers in Vietnam. I built this website using a content management system (CMS), enabling efficient product management and user experience.',
		image: SokoNumber
	},
	{
		name: 'Natzest',
		link: 'https://natzest.com',
		description: 'Natzest offers support services for individuals and organizations aiming to manage their businesses efficiently. I developed this website using WordPress as the CMS. For advanced customization, I utilized HTML and CSS, and integrated Google reCAPTCHA for enhanced form security.',
		image: Leon
	},
	{
		name: 'Ztech',
		link: 'https://ztech-hos.netlify.app',
		description: 'ZTech is a hackathon project centered around healthcare innovation. I developed the frontend using HTML, CSS, and JavaScript. The website provides detailed information about stethoscope usage and manages customer data.',
		image: Kasper
	},
]
//
function App() {
	const form = useRef();
	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();
		setLoading(true);

		const formData = new FormData(form.current);
		formData.append("access_key", "9e31b8fa-79fb-4d7e-ac50-f6df4eb2ee94");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const result = await response.json();
			if (result.success) {
				setSuccess(true);
				form.current.reset(); // clear the form
			} else {
				alert("Failed to send message. Try again later.");
			}
		} catch (error) {
			console.error("Web3Forms error:", error);
		} finally {
			setLoading(false);
		}
	};


	return (

		<div className={style.app}>
			{/* Navbar */}
			<div className={style.nav}>
				<a className={style.logo}>
					<FaReact color='var(--primary-main)' size='50px' />
					<h5>Yash Tiwari</h5>
				</a>
				<ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="./contact">Contact</a></li>
				</ul>

				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="./contact">Contact</a></li>
				</ul>
			}

			{/* Home */}
			<div id='Home' className={style.home}>
				<Waves
					lineColor="#fff"
					backgroundColor="rgb(94, 6, 205,0.2)"
					waveSpeedX={0.02}
					waveSpeedY={0.01}
					waveAmpX={40}
					waveAmpY={20}
					friction={0.9}
					tension={0.01}
					maxCursorMove={120}
					xGap={12}
					yGap={36}
				/>
				<div className={style["home-content"]}>
					<h1>HEY, I'M Yash Tiwari</h1>
					<p>Software engineer with hands-on experience in the MERN stack, developing both frontend and backend of web applications to ensure the success of the product.</p>
					<a
						href={cv}
						download="cv-PDF-document"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Download Resume
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/stackbyyash' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/yash-tiwari-1b4889249/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:yashtiwari.hynth@gmail.com?subject=SendMail&body=Description.">
						<BiLogoGmail size="30px" color='black' />
					</a>
					<a className={style.facebook} target="_blank" href='https://www.instagram.com/yash.hynth?igsh=MWFvbWZidng2aDdicA==' >
						<BsInstagram size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>
							<h3>Get to know me!</h3>
							<p>
								I'm a <span>Software Engineer</span> with hands-on experience in the MERN stack, building both the Front-end and Back-end of Websites and Web Applications that contribute to the success of the overall product. Check out some of my work in the <span>Projects</span> section. <br /> <br />
								I also enjoy sharing content related to what I've learned over the years in <span>Web Development</span> to help others in the Dev Community. Feel free to connect or follow me on my <a href="https://github.com/stackbyyash" target="_blank">Github</a> where I post useful content related to Web Development and Programming. <br /> <br />
								I'm open to <span>Job</span> opportunities where I can contribute, learn, and grow. If you have a great opportunity that matches my skills and experience, don't hesitate to <span>contact</span> me.
							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											<IconButton
												width="170px"
												height="50px"
												backgroundColor="var(--primary-main)"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Live Demo
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
			{/* <div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p className={style.subtitle}>
					Feel free to contact me by submitting the form below and I will get back to you as soon as possible
				</p>

					<form
						ref={form}
						onSubmit={sendEmail}
						method="POST"
						className={clsx(style.form, { [style['inactive-form']]: loading })}
					>
						<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
						<input type="hidden" name="subject" value="New Contact Form Submission" />
						<input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" />

						<InputField
							className={style.nameInput}
							width="100%"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
							required
						/>
						<InputField
							width="100%"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
							required
						/>
						<TextAreaField
							width="100%"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
							required
						/>

						<div className={style.buttonContainer}>
							<SubmitButton
								icon={<RiSendPlaneFill size="20px" color="white" />}
								width="200px"
								height="60px"
								color="white"
								backgroundColor="var(--primary-main)"
							>
								Submit
							</SubmitButton>
						</div>

						{loading && (
							<div className={style.loader}>
								<Loader />
							</div>
						)}
					</form>
				</div>
			</div> */}
			<Router>
				<Routes>
					<Route path="./contact" element={<Contact />} />
				</Routes>
			</Router>
			<div className="contact">
				<Contact />
			</div>





			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Yash Tiwari</h3>
							<p>A MERN Stack focused Web Developer building the Frontend And Backend  of Websites and Web Applications that leads to the success of the overall product</p>
						</div>
						<div className=" ">
							<div className={style["contact-nav"]}>
								<a className={style.github} target="_blank" href='https://github.com/yashtiwari0001' >
									<AiFillGithub size="30px" color='black' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/yash-tiwari-1b4889249/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >
									<AiFillLinkedin size="30px" color='black' />
								</a>
								<a className={style.gmail} target="_blank" rel="noopener noreferrer" href="mailto:yashtiwari.hynth@gmail.com">
									<BiLogoGmail size="30px" color='black' />
								</a>
								<a className={style.facebook} target="_blank" href='https://www.instagram.com/yash.hynth?igsh=MWFvbWZidng2aDdicA==' >
									<BsInstagram size="30px" color='black' />
								</a>
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2025. Made by <span>Yash Tiwari</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;