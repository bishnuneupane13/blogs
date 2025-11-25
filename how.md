# How This Website Was Built

This guide explains the core concepts used to build your React portfolio website.

## 1. The Building Blocks: Components

React apps are built using **Components**. Think of them like LEGO blocks. We built separate blocks for each part of your site:

- `Navbar.js`: The top navigation bar.
- `Hero.js`: The big introduction section.
- `TechStack.js`: The list of technologies.
- `Footer.js`: The bottom section.

We then combined all these blocks in `App.js` to make the full page.

## 2. JSX: Mixing HTML and JavaScript

React uses a syntax called **JSX**, which looks like HTML but lets you use JavaScript power inside it.

### The Magic of Curly Braces `{}`

In HTML, you just write static text. In React, you can use `{}` to run JavaScript code right inside your HTML.

**Example from your `TechStack.js`:**

```javascript
const techs = ["React", "CSS3", "JavaScript"];

// ... inside the return (...)
{techs.map((tech, index) => (
    <div key={index} className="tech-item">
        {tech} 
    </div>
))}
```

**What is happening here?**
1. `{techs.map(...)}`: The outer `{}` tells React "Stop reading HTML, this is JavaScript code!".
2. `.map(...)`: This is a loop. It goes through every item in your `techs` list.
3. `(tech)`: This variable holds the current item (e.g., first "React", then "CSS3").
4. `{tech}`: The inner `{}` prints the value of that variable onto the screen.

So instead of writing 10 `<div>`s manually, we write one loop, and React generates them all for us!

## 3. CSS: The Styling (The "Hard" Stuff)

We used `App.css` to make everything look good. Here are the key tricks we used:

### Flexbox (`display: flex`)
Used in the **Navbar** and **Hero Buttons**.
- It lines items up in a row (left-to-right).
- `justify-content: space-between`: Pushes items to the far edges (like Logo on left, Links on right).
- `gap: 1rem`: Adds space between items automatically.

### CSS Grid (`display: grid`)
Used in the **Tech Stack** and **Blog Cards**.
- It creates a grid layout.
- `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`: This is a "magic" line that makes the grid responsive. It says "fit as many columns as possible, but make sure each one is at least 300px wide."

### Glassmorphism (The Transparent Look)
Used in the **Navbar** and **Cards** (in the previous design).
- `background: rgba(255, 255, 255, 0.05)`: A semi-transparent white background.
- `backdrop-filter: blur(10px)`: Blurs whatever is *behind* the element, creating that frosted glass effect.
- `border: 1px solid rgba(255, 255, 255, 0.1)`: A very faint border to define the edges.

## 4. React Router (Navigation)

We used `react-router-dom` to handle pages.
- `<Link to="/bugs">`: This is like an HTML `<a>` tag, but it doesn't reload the page. It just swaps the content instantly, making the site feel super fast.

---

**Summary:**
- **Components** break the UI into chunks.
- **Props** pass data down (like passing a title to a card).
- **{ }** lets you inject dynamic data (variables) into your HTML.
- **CSS Modules/Classes** style the elements to look professional.

## 5. The Blog Section (Reusable Components)

The "Bugs" and "Life" sections on your home page are actually the **exact same code**! This is the power of **Props**.

In `src/components/BlogList.js`, we defined a component called `ContentSection`. It doesn't have hardcoded text. Instead, it accepts "props" (properties) like variables:

```javascript
function ContentSection({ title, description, icon, link }) {
    return (
        <div className="content-section">
            <h2>{title}</h2>
            <p>{description}</p>
            {/* ... */}
        </div>
    )
}
```

Then in `App.js`, we use it twice with different data:

```javascript
// First time: For Bugs
<ContentSection 
    title="Bugs & Vulnerabilities" 
    icon="🐛" 
/>

// Second time: For Life
<ContentSection 
    title="Life & Thoughts" 
    icon="🌱" 
/>
```

### Conditional Rendering (`&&`)

We also used a cool trick to only show the link card if a link exists:

```javascript
{link && (
    <Link to={link}>...</Link>
)}
```

This means: "IF `link` exists (is true), THEN render the `<Link>` component." If we didn't pass a link prop, that whole block would just disappear. This is how we control what shows up on the screen dynamically!
