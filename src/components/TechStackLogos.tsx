import React from 'react';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiFlutter ,SiPhp, SiPython, SiHtml5, SiCss3, SiJavascript, SiVuedotjs, SiMysql, SiFirebase, SiBootstrap} from 'react-icons/si';

interface TechStackLogoProps {
  name: string;
  className?: string;
}

const TechStackLogo: React.FC<TechStackLogoProps> = ({ name, className = "" }) => {
  const iconSize = "w-6 h-6";
  const combinedClassName = `${iconSize} ${className}`;
  
  switch (name.toLowerCase()) {
    case 'react':
      return <SiReact className={`text-blue-500 ${combinedClassName}`} title="React" />;
    case 'node.js':
      return <SiNodedotjs className={`text-green-600 ${combinedClassName}`} title="Node.js" />;
    case 'mongodb':
      return <SiMongodb className={`text-green-500 ${combinedClassName}`} title="MongoDB" />;
    case 'tailwind css':
      return <SiTailwindcss className={`text-cyan-500 ${combinedClassName}`} title="Tailwind CSS" />;
    case 'flutter':
      return <SiFlutter className={`text-blue-400 ${combinedClassName}`} title="Flutter" />;
    case 'php':
      return <SiPhp className={`text-violet-600 ${combinedClassName}`} title="PHP" />;
    case 'python':
      return <SiPython className={`text-yellow-500 ${combinedClassName}`} title="Python" />;
    case 'html5':
      return <SiHtml5 className={`text-orange-600 ${combinedClassName}`} title="HTML5" />;
    case 'css3':
      return <SiCss3 className={`text-blue-600 ${combinedClassName}`} title="CSS3" />;
    case 'javascript':
      return <SiJavascript className={`text-yellow-500 ${combinedClassName}`} title="JavaScript" />;
    case 'vue.js':
      return <SiVuedotjs className={`text-green-400 ${combinedClassName}`} title="Vue.js" />;
    case 'mysql':
      return <SiMysql className={`text-blue-700 ${combinedClassName}`} title="MySQL" />;
    case 'firebase':
      return <SiFirebase className={`text-yellow-400 ${combinedClassName}`} title="Firebase" />;
    case 'bootstrap':
      return <SiBootstrap className={`text-purple-600 ${combinedClassName}`} title="Bootstrap" />;
    default:
      return null;
  }
};

export default TechStackLogo;
