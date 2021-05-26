using System;
using System.IO;
using System.Reflection;
using IOPath = System.IO.Path;

namespace HotChocolate.Data.Neo4J.Analyzers
{
    public partial class DataSourceGenerator
    {
        private static string _location = "/Users/michael/local/hc-1/src/HotChocolate/Analyzers/src/Analyzers/bin/Debug/netstandard2.0";
        
        
        /*IOPath.GetDirectoryName(
            typeof(DataSourceGenerator).Assembly.Location)!;*/

        static DataSourceGenerator()
        {
            AppDomain.CurrentDomain.AssemblyResolve += CurrentDomainOnAssemblyResolve;
        }

        private static Assembly? CurrentDomainOnAssemblyResolve(
            object sender,
            ResolveEventArgs args)
        {
            try
            {
                File.AppendAllText("/Users/michael/local/hc-1/src/HotChocolate/Analyzers/test/Analyzers.Tests/obj/gen.txt" + Environment.NewLine, _location);

                var assemblyName = new AssemblyName(args.Name);
                var path = IOPath.Combine(_location, assemblyName.Name + ".dll");
                return Assembly.LoadFrom(path);
            }
            catch
            {
                return null;
            }
        }
    }
}