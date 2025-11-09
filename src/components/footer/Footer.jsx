"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { gsap } from 'gsap'
import FooterLogo from '../../assets/images/logo.png';

const Footer = () => {
  const footerRef = useRef(null)
  const buttonRef = useRef(null)
  const socialIconsRef = useRef([])

  useEffect(() => {
    // GSAP animations for footer elements
    gsap.fromTo(footerRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )

    // Button hover animation
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, {
          borderColor: '#fff',
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, {
          borderColor: '#797979',
          duration: 0.3,
          ease: "power2.out"
        })
      })
    }

    // Social icons hover animation
    socialIconsRef.current.forEach(icon => {
      if (icon) {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            borderColor: '#fff',
            color: 'var(--primaryColor)',
            duration: 0.3,
            ease: "power2.out"
          })
        })
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            borderColor: '#d5d5d5',
            color: '#fff',
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    })
  }, [])

  return (
    <div id='Footer' ref={footerRef}>
        <div className='container'>
            <div className='FooterMain'>
                  <div className='FooterSection1'>
                     <div className='FooterShortTitle'>
                       <p>Experience the Art of Dance</p>
                     </div>
                        <div className='FooterMainTitle'>
                         <p>Join Our Dance Community Today</p>
                     </div>
                        <div className='FooterDec'>
                          <p>We offer professional dance classes for all ages and skill levels. Discover your passion for dance with our expert instructors.</p>
                     </div>
                     <div className='FooterContact'>
                       <button ref={buttonRef}>Let&apos;s Talk</button>
                     </div>
                     <div className='FooterCopyright'>
                       <p>Copyright © All Rights Reserved – Kalavardhani Art Center</p>
                     </div>
                  </div>
                  <div className='FooterSection2'>
                      <div className='FooterLogo'>
                         <Image 
                           src={FooterLogo} 
                           alt="Kalavardhani Art Center Logo" 
                           width={60} 
                           height={60} 
                         />
                      </div>
                      <div className='FooterSocialIcon'>
                        <a 
                          href="https://instagram.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label="Instagram"
                          ref={el => socialIconsRef.current[0] = el}
                        >
                          <FaInstagram />
                        </a>
                        <a 
                          href="https://facebook.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label="Facebook"
                          ref={el => socialIconsRef.current[1] = el}
                        >
                          <FaFacebookF />
                        </a>
                        <a 
                          href="https://youtube.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label="YouTube"
                          ref={el => socialIconsRef.current[2] = el}
                        >
                          <FaYoutube />
                        </a>
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Footer