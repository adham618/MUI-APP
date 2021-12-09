const Layout = ({ children }) => {
  return (
    <div>
      <div sx={{ background: "#f9f", width: "100%" }}>
        {children}
      </div>
    </div>
  )
}

export default Layout
