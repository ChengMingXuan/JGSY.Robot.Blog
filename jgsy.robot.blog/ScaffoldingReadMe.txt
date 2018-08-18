 
Scaffolding has generated all the files and added the required dependencies.

Make sure you copy the token now. We don't store it and you won't be able to see it again
=====================================================================================================
939b0f5363fca7a925285057575d81958e31367f838281mgfig436zpcj2xcddeorb7ub43ax6idory5bzqld4bl3vqk4gnmq
=====================================================================================================


However the Application's Startup code may required additional changes for things to work end to end.
Add the following code to the Configure method in your Application's Startup class if not already done:

        app.UseMvc(routes =>
        {
          routes.MapRoute(
            name : "areas",
            template : "{area:exists}/{controller=Home}/{action=Index}/{id?}"
          );
        });
	