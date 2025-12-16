import type React from "react"

export default function InventorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // This layout explicitly does NOT include the Footer component
    // Only the inventor content will be rendered
    return <>{children}</>
}
