![layout](https://tutorial.techaltum.com/images/css-layout.jpg)

Implement the layout shown above in React component.



const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4 text-center">
        Header
      </header>

      <div className="flex flex-1">
        <aside className="bg-green-500 text-white p-4 w-1/4">
          Left Sidebar
        </aside>
        <main className="bg-gray-200 flex-1 p-4">
          Main Content
        </main>

        <aside className="bg-green-500 text-white p-4 w-1/4">
          Right Sidebar
        </aside>
      </div>

      <footer className="bg-blue-500 text-white p-4 text-center">
        Footer
      </footer>
    </div>
  );
};

export default Layout;