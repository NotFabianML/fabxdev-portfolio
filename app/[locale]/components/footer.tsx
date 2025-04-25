import Link from "next/link";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-primary">
              {/* <Code className="h-8 w-8" /> */}
              <span className="text-2xl font-anton tracking-wider">FabxDev</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Building amazing digital experiences with clean, efficient code.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/NotFabianML"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/fabian-miranda-loaiza/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:fabianmloaiza@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" /> Email
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} FabxDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}