const AuthLayout = ({ children }: {children: React.ReactNode}) => {
    return (  
        <div className="bg-green-500 h-full">
            {children}
        </div>
    );
}
 
export default AuthLayout;