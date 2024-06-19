import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ fontWeight: 800, fontSize: 22 }}>
        Python With JD
      </span>
    </>
  ), 
  project: {
    link: 'https://github.com/jsdhami/Python',
  },
  chat: {
    link: 'https://discord.com/',
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
      if (title === 'About') {
        return <>❓ {title}</>
      }
      if (title === 'Basic Python') {
        return <>📚 {title}</>
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
