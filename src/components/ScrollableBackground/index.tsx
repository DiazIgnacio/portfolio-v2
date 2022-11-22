const ScrollableBackground = () => (
  <>
    <div
      className="absolute inset-0 -z-30 overflow-hidden bg-fixed"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80")'
      }}
    ></div>
    <span className="absolute inset-0 -z-20 h-full w-full bg-black opacity-75"></span>
    <span className="absolute inset-0 -z-10 h-full w-full bg-primary opacity-10"></span>
  </>
)

export default ScrollableBackground
