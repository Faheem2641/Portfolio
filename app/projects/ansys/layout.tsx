import type React from "react"

export default function AnsysLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // This layout explicitly does NOT include the Footer component
    // Only the ANSYS content will be rendered
    return <>{children}</>
}
