document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
   
    const css = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .navbar {
            background-color: #333;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .nav-list {
            list-style: none;
            display: flex;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .nav-list a {
            color: white;
            text-decoration: none;
            font-size: 1.1rem;
            transition: color 0.3s ease;
        }
        
        .nav-list a:hover {
            color: #ddd;
        }
        
        .dropdown {
            position: relative;
        }
        
        .dropdown-content {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #333;
            min-width: 160px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            z-index: 1;
            padding: 0.5rem 0;
        }
        
        .dropdown:hover .dropdown-content {
            display: block;
        }
        
        .dropdown-content li {
            padding: 0.5rem 1rem;
        }
        
        .dropdown-content a {
            color: white;
            text-decoration: none;
            display: block;
        }
        
        .dropdown-content a:hover {
            background-color: #444;
        }
        
        .content {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        
        .no-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    }

        h1 {
            margin-bottom: 1rem;
        }

        /* New styles for paragraphs and lists */
        .section-content {
            margin-bottom: 2rem;
        }

        .section-content p {
            margin-bottom: 1.5rem;
            line-height: 1.8;
        }

        .requirements-list {
            list-style-position: inside;
            margin: 1.5rem 0;
            padding-left: 1rem;
        }

        .requirements-list li {
            margin-bottom: 0.5rem;
        }

        .paragraph-spacing {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
        }

        /* Italic style */
        .italic {
            font-style: italic;
        }

        /* Bold style */
        .bold {
            font-weight: bold;
        }
    `;
   
    style.textContent = css;
    document.head.appendChild(style);
});
