import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import { Image } from '@nextui-org/react';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
     {
       href: "/services",
       title: "Services",
     },
     {
       href: "/blog",
       title: "Blog",
     },
     {
       href: "/about",
       title: "About",
     },
     {
       href: "/contact",
       title: "Contact",
     },
   ];

   return (
     <Navbar
       variant="sticky"
       css={{
         "& .nextui-navbar-container": {
           background: "tranparent",
           border: "none",
           position: "fixed",
           top:0
         },
       }}
     >
       <Navbar.Brand>
         <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
         <Link href="/">
           <Image
             width={170}
             height={100}
             src="/logo.svg"
             alt="logo"
             objectFit="contain"
           />
         </Link>

         <Navbar.Content
           hideIn="sm"
           css={{
             pl: "6rem",
           }}
           enableCursorHighlight
           activeColor="warning"
         >
           <Dropdown isBordered>
             <Navbar.Item>
               <Dropdown.Button
                 auto
                 light
                 css={{
                   px: 0,
                   dflex: "center",
                   svg: { pe: "none" },
                 }}
                 iconRight={icons.chevron}
                 ripple={false}
               >
                 Services
               </Dropdown.Button>
             </Navbar.Item>
             <Dropdown.Menu
               aria-label="Value1st Services"
               css={{
                 $$dropdownMenuWidth: "340px",
                 $$dropdownItemHeight: "70px",
                 "& .nextui-dropdown-item": {
                   py: "$4",
                   svg: {
                     color: "$secondary",
                     mr: "$4",
                   },
                   "& .nextui-dropdown-item-content": {
                     w: "100%",
                     fontWeight: "$semibold",
                   },
                 },
               }}
             >
               <Dropdown.Item
                 key="analysis"
                 showFullDescription
                 description="An analysis of the history of your business."
                 icon={icons.scale}
               >
                 <Link
                   href="/services"
                   css={{
                     color: "white",
                   }}
                 >
                   History Analysis
                 </Link>
               </Dropdown.Item>
               <Dropdown.Item
                 key="usage_metrics"
                 showFullDescription
                 description="The perfect plan that will meet your goals."
                 icon={icons.activity}
               >
                 <Link
                   href="/services"
                   css={{
                     color: "white",
                   }}
                 >
                   Perfect marketing plan
                 </Link>
               </Dropdown.Item>
               <Dropdown.Item
                 key="production_ready"
                 showFullDescription
                 description=" Operative campaigns that deliver consistent results.
"
                 icon={icons.flash}
               >
                 <Link
                   href="/services"
                   css={{
                     color: "white",
                   }}
                 >
                   Operative campaigns
                 </Link>
               </Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
           <Navbar.Link isActive href="/blog">
             Blog
           </Navbar.Link>
           <Navbar.Link href="/about">About</Navbar.Link>
           <Navbar.Link href="/contact">Contact</Navbar.Link>
         </Navbar.Content>
       </Navbar.Brand>

       <Navbar.Collapse>
         {collapseItems.map(({ title, href }) => (
           <Navbar.CollapseItem key={title}>
             <Link
               color="inherit"
               css={{
                 minWidth: "100%",
               }}
               href={href}
             >
               {title}
             </Link>
           </Navbar.CollapseItem>
         ))}
       </Navbar.Collapse>
       <Navbar.Content>
         <ModalLogin />
       </Navbar.Content>
     </Navbar>
   );
};
