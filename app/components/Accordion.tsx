"use client";

import { useContext, useEffect, useState, createContext, useRef, useCallback } from "react";
import { ChevronRight, FolderOpen, Folder, FileCode } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AccordionContext = createContext<any>(null)

export const Accordion = ({
  children,
  value,
  onChange,
  multipleOpen = false,
  defaultOpen = [],
  ...props
}: {
  children: React.ReactNode
  value?: any
  onChange?: any
  multipleOpen?: boolean
  defaultOpen?: string[]
}) => {
  const [selected, setSelected] = useState<string[]>(multipleOpen ? (defaultOpen || []) : (value ? [value] : []))

  useEffect(() => {
    onChange?.(selected)
  }, [selected, onChange])

  const toggleItem = (value: string) => {
    if (multipleOpen) {
      setSelected(prev => 
        prev.includes(value) 
          ? prev.filter(item => item !== value)
          : [...prev, value]
      )
    } else {
      setSelected(prev => prev.includes(value) ? [] : [value])
    }
  }

  const closeAll = () => {
    setSelected([])
  }

  return (
    <ul {...props} className="select-none">
      <AccordionContext.Provider value={{ selected, toggleItem, closeAll }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  )
}

export const AccordionItem = ({
  children,
  value,
  trigger,
  parentPath,
  isFolder = true,
  navigateOnClick = false,
  ...props
}: {
  children?: React.ReactNode
  value: any
  trigger: any
  parentPath?: string
  isFolder?: boolean
  navigateOnClick?: boolean
}) => {
  const context = useContext(AccordionContext)
  const { selected, toggleItem, closeAll } = context || { selected: [], toggleItem: () => {}, closeAll: () => {} }
  const [nestedSelected, setNestedSelected] = useState<string[]>([])
  const open = selected.includes(value)
  const pathName = usePathname()
  const router = useRouter()
  const fullPath = parentPath ? `${parentPath}/${value}` : `/${value}`
  const isActive = pathName === fullPath
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)
  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    if (!ref.current || !open) return

    const resizeObserver = new ResizeObserver((entries) => {
      if (!open || !mountedRef.current) return
      
      for (const entry of entries) {
        const newHeight = entry.target.scrollHeight
        setHeight(newHeight)
      }
    })

    resizeObserver.observe(ref.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [open])

  useEffect(() => {
    if (children && open) {
      const nestedValues: string[] = []
      if (React.isValidElement(children)) {
        const child = children as React.ReactElement<{ value?: string; children?: React.ReactNode }>
        if (child.props?.value && child.props?.children) {
          nestedValues.push(child.props.value)
        }
      } else if (Array.isArray(children)) {
        children.forEach((child: any) => {
          if (React.isValidElement(child)) {
            const childElement = child as React.ReactElement<{ value?: string; children?: React.ReactNode }>
            if (childElement.props?.value && childElement.props?.children) {
              nestedValues.push(childElement.props.value)
            }
          }
        })
      }
      setNestedSelected(prev => {
        if (JSON.stringify(prev.sort()) === JSON.stringify(nestedValues.sort())) {
          return prev
        }
        return nestedValues
      })
    }
  }, [children, open])

  useEffect(() => {
    if (open && ref.current) {
      requestAnimationFrame(() => {
        if (ref.current && mountedRef.current) {
          setHeight(ref.current.scrollHeight)
        }
      })
    } else {
      setHeight(0)
      if (!open) {
        setNestedSelected([])
      }
    }
  }, [open])

  const handleClick = (e: React.MouseEvent) => {
    if (children) {
      e.preventDefault()
      toggleItem(value)
      
      if (navigateOnClick) {
        router.push(fullPath)
      }
    } else {
      e.preventDefault()
      closeAll()
      router.push(fullPath)
    }
  }

  const nestedToggleItem = useCallback((nestedValue: string) => {
    setNestedSelected(prev => 
      prev.includes(nestedValue)
        ? prev.filter(item => item !== nestedValue)
        : [...prev, nestedValue]
    )
  }, [])

  const nestedCloseAll = useCallback(() => {
    setNestedSelected([])
  }, [])

  return (
    <li {...props}>
      <Link 
        href={fullPath} 
        onClick={handleClick}
        className={`flex items-center gap-1 px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer text-sm ${
          isActive ? "bg-line" : ""
        }`}
      >
        <div className="w-4 h-4 flex items-center justify-center">
          {children ? (
            <ChevronRight 
              size={14} 
              className={`transition-transform duration-200 text-gray-400 ${
                open ? "rotate-90" : ""
              }`}
            />
          ) : (
            <span className="w-4" />
          )}
        </div>
        
        <div className="w-4 h-4 flex items-center justify-center">
          {isFolder ? (
            open ? (
              <FolderOpen size={16} className="text-blue-400" />
            ) : (
              <Folder size={16} className="text-blue-400" />
            )
          ) : (
            <FileCode size={16} className="text-gray-400" />
          )}
        </div>
        
        <span className="text-gray-200 flex-1">{trigger}</span>
      </Link>
      
      {children && (
        <div 
          className="transition-all duration-200 ease-in-out"
          style={{ 
            height: `${height}px`,
            overflow: 'hidden'
          }}
        >
          <div ref={ref} className="relative pl-4">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-line" />
            
            {/* Render nested items as plain divs, not list items */}
            <AccordionContext.Provider value={{ selected: nestedSelected, toggleItem: nestedToggleItem, closeAll: nestedCloseAll }}>
              {children}
            </AccordionContext.Provider>
          </div>
        </div>
      )}
    </li>
  )
}

export const AccordionContent = ({
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  className = "",
  preventCloseAll = false
}: {
  href: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  children: React.ReactNode
  className?: string
  preventCloseAll?: boolean
}) => {
  const context = useContext(AccordionContext)
  const { closeAll } = context || { closeAll: () => {} }
  const router = useRouter()
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!preventCloseAll) {
      closeAll()
    }
    
    if (onClick) {
      onClick(e)
    }
    if (!e.defaultPrevented) {
      e.preventDefault()
      router.push(href)
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex items-center gap-1 px-2 py-1 hover:bg-[#2a2d2e] text-sm text-gray-300 ${className}`}
    >
      <span className="w-4" />
      <FileCode size={16} className="text-gray-400" />
      {children}
    </Link>
  )
}