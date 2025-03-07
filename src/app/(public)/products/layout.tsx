import React from 'react';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Products layout
      {children}
    </div>
  );
}

export default layout;
