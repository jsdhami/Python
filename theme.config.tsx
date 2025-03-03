import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ fontWeight: 800, fontSize: 22 }}>
        Learn Python
      </span>
    </>
  ), 
  project: {
    link: 'https://github.com/jsdhami/Python',
  },
  chat: {
    link: 'https://discord.gg/gxJU6eeE94',
  },
  banner: {
    key: '2.0-release',
    text: (
      <Link href="https://youtube.com/@SciTechNepal" target="_blank">
        🎉 Python For Research Classes. See Recording →
      </Link>
    )
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div className='md:font-extrabold, md:text-2xl' style={{background:'gray', textAlign: 'center', color:'white', fontSize:16 }}>{title}</div>
        )
      }
      // if (title === 'About') {
      //   return <>❓ {title}</>
      // }
      if (title === 'Core Python') {
        return <> 🐍 {title}</>
      }
      if (title === 'Introduction') {
        return <>1. {title}</>
      }
      if (title === 'Variables') {
        return <>2. {title}</>
      }
      if (title === 'Datatypes') {
        return <>3. {title}</>
      }
      if (title === 'Operators') {
        return <>4. {title}</>
      }
      if (title === 'Statements') {
        return <>5. {title}</>
      }
      if (title === 'Loops') {
        return <>5. {title}</>
      }
      if (title === 'Functions') {
        return <>6. {title}</>
      }
      return <>➡ {title}</>
    }
  },

  docsRepositoryBase: 'https://github.com/jsdhami/Python/tree/main',
  footer: {
    text: '© 2024 Janak Singh Dhami. All rights reserved',
  },
    
}

export default config
