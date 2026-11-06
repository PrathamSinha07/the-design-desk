'use client';
import { useEffect, useState } from 'react';
const links = [{ id: 'front-page', label: 'Front Page' }, { id: 'news', label: 'News & Achievements' }, { id: 'studio', label: 'Out of the Studio' }, { id: 'clock', label: 'Off the Clock' }];
export default function Navbar() {
 const [active,setActive]=useState('front-page'); const [open,setOpen]=useState(false);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActive(visible.target.id)},{rootMargin:'-20% 0px -65% 0px',threshold:[0,.1,.3,.6]});links.forEach(({id})=>{const el=document.getElementById(id);if(el)observer.observe(el)});return()=>observer.disconnect()},[]);
 return <header className="site-nav"><a className="nav-brand" href="#front-page" onClick={()=>setOpen(false)}>THE DESIGN DESK</a><button className="menu-toggle" type="button" aria-expanded={open} aria-label={open?'Close navigation menu':'Open navigation menu'} onClick={()=>setOpen(!open)}><span/><span/><span/></button><nav className={open?'nav-links is-open':'nav-links'} aria-label="Newspaper pages">{links.map(link=><a key={link.id} href={`#${link.id}`} aria-current={active===link.id?'location':undefined} onClick={()=>setOpen(false)}>{link.label}</a>)}</nav></header>;
}
