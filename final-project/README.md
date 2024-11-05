# **FP2 \- Evaluation of the Final Project**

## Project Description

The primary motivation for this project is to showcase my design skills through a beautiful, intuitive color selector. Color plays a central role in this case study design, requiring flexibility and precise control to demonstrate a broad spectrum of choices for base and accent colors. The web portion of the project will feature an advanced color selector interface that allows users to adjust base and accent colors along two dimensions: hue and saturation. Users can switch between these dimensions using segmented controls, designed with semantic HTML and high-contrast indicators to ensure accessibility and clarity regardless of color choice.

## High-Fi Prototypes

### *Prototype 1*

![Prototype 1](../assets/final-project/Proto1.webp)

Feedback highlighted that users found it difficult to understand icon meanings without contextual explanations. Many felt the layout could be clearer if both base and accent controls were displayed together.

### *Prototype 2*

![Prototype 2](../assets/final-project/Proto2.webp)

Users appreciated the side-by-side view, as it allowed them to see color adjustments more intuitively. They also suggested labels like “Primary” and “Background” to denote color roles more clearly.

## Usability Test

During usability testing over video call with screen sharing, participants tested the color selector’s functions and were asked to identify regions' purposes, interpret icons, suggest improvements, and propose alternative labels for color dimensions.

**Key Feedback:**
1. **Icons for Clarity**: Participants suggested adding a tooltip or labels to improve comprehension of the icon functions.
2. **Improved Labels**: Terms like “Primary” and “Background” were preferred over “Base.”
3. **Design Interference**: The initial design was visually complex, creating a clash with the web controls.

### Design Adjustments Based on Feedback
- **Icon Clarity**: Updated icon to better represent functions like “Saturation.”
- **Side-by-Side Layout**: Implemented a side-by-side layout to allow for direct comparison of primary and accent adjustments.
- **Updated Labels**: Adopted labels such as “Primary” and “Background” to denote colors more intuitively.

This feedback inspired iterative designs, resulting in a more user-friendly and visually balanced color selector.

## Updated Designs

![Updated Design](../assets/final-project/Refined.webp)

The updated design includes a simplified interface with intuitive icons, clear labeling, and a side-by-side layout. These adjustments enable users to better understand and manipulate colors within the selector, aligning the interface with usability needs highlighted during testing.

## Feedback Summary

Feedback during lab sessions reinforced usability testing findings, particularly regarding icon clarity and label improvements. Participants emphasized the importance of real-time color changes and supported the side-by-side slider design. Suggestions from the lab also included integrating hover tooltips to clarify icon meanings for first-time users.

### Influence on Design
- **Tooltips**: Added hover tooltips for each icon to provide immediate clarity.
- **Real-Time Interaction**: Enhanced real-time color adjustments to make changes more apparent and responsive.
- **Future Development**: Lab participants expressed interest in a feature to export custom color palettes, which inspired ideas for future iterations.

## Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester.

### *Implementation Plan*

- [X] **Week 9 (Oct 28 \- Nov 1)**:
  - [X] FP1 due
  - [X] Finalize UI elements and refined design for dual slider functionality.
  
- [ ] **Week 10 (Nov 4 \- Nov 8)**:  
  - [ ] Draft code for dual slider functionality, and get all assets necessary finalized.

- [ ] **Week 11 (Nov 11 \- Nov 15)**:  
  - [ ] Assets imported and code for slider officially working and mapped to JS and relevent libraries.
  - [ ] Integrate hover tooltips and test responsiveness.

- [ ] **Week 12 (Nov 18 \- Nov 22)**:  
  - [ ] Implement accessibility features, including screen reader support and keyboard navigation.

- [ ] **Week 13 (Nov 25 \- Nov 29)**:  
  - [ ] Conduct further usability testing and address feedback. 

- [ ] **Week 14 (Dec 2 \- Dec 6)**:  
  - [ ] FP4 due. Consider implementing additional functionality like palette import / export. 

### *Libraries and Other Components*

- **JavaScript Libraries**: D3.js or svg.filter.js for color adjustments, Tippy.js for hover effects.
- **Accessibility Tools**: ARIA roles and semantic HTML for compatibility with assistive technologies.

## Generative AI Use Plan

### *Tool Use*

Outline how you plan to use Generative AI tools to aid in the implementation.

* **ChatGPT**  
  * I will use it for generating optimized code snippets, debugging, and alternative UI solutions. ChatGPT can help explore layouts for color components and suggest responsive design approaches.
  * I will avoid using it for design-specific things, as it may not fully understand project-specific decisions.

* **GitHub Copilot**  
  * Copilot will assist with coding efficiency and reduce redundant tasks, especially for structuring HTML components and managing states.
  * Copilot may struggle with project-specific adjustments, so manual tweaks will still be needed.

### *Responsible Use*

All AI-generated code will be reviewed for ethical and privacy concerns, ensuring it aligns with best practices and accessibility standards.

---


# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*

![Existing Portfolio Website](../assets/final-project/Portfolio.webp)

My entire existing portfolio, coded in vanilla HTML, CSS, and JS, could be converted to React. The existing portfolio already has existing specs for visual and interaction design, so I would be transferring all information over. I plan to re-encode alt texts to optimize for e-readers, and use more native, semantic elements than I am currently using. I want to convey that I have a sufficient understanding of both vanilla code and a market library, such as React. As a visual designer, this can help guide my designs to be more feasible, while building a stronger empathy for the developer workflow.

### *Idea 2*
![Color Picker](../assets/final-project/ColorPicker.webp)

In one of my case studies, color plays a fundamental role. To emphasize the wide spectrum of color supported, I would like to add in an advanced color selector that allows one to change two colors (base, accent) across two dimensions (hue, saturation). The selector will support a fine-tuned interaction, with the segmented control on either side switching between the two colors (base, accent) and color dimension (hue, saturation). I am planning to encode everything with semantic HTML elements and using adequate indicators for primary and secondary colors with high contrast regardless of the chosen hue. I would like to show that I take pride in my craft, and that I will travel great lengths to convey even the simplest of ideas.

### *Idea 3*
![Worldview: Spatial & Temporal News](../assets/final-project/Worldview.webp)

Worldview is a web app that allows one to display archived news articles over a map view. This project intends to temporally and spatially organize archived so that it makes understanding the history of your current locality more accessible. The time selector allows one to easily switch between time periods, with small indicators showing off high-volume decades. I would love to be able to simplify the list down to make this visual filter available more easily, while reducing cognitive load. I want this to convey more information about my interests in improving social discourse by making historical information more engaging and fun to access.

…

## Feedback Summary

Hannah suggested that my goal with React should go beyond just implementing it. For Worldview, she found the focus on local history interesting, but she was a bit worried about the scale. She asked if I’d focus on a specific region or try to cover a global dataset.

Christina recommended checking out some beginner React tutorials to see if it’s easy to learn. She also suggested making the user profile and technical scope for the Color Picker clearer. She said I should explain what the feature is for. For Worldview, she said I should start with just one location and a good dataset. That way, the project won’t be too big and easy to manage.

Naimah said I should think about how the Color Picker would work on a mobile device, since there’s not much space on the screen. She also suggested making the user interaction more fun by adding more than one interactive element. That could make the color selection process more interesting.

Katie asked me about the visual goals for my personal website layout. She suggested I think about what the final design might look like before I start. For the Advanced Color Picker, she asked how the sliders would affect the color elements. She said I need to design for clarity and visual feedback. For Worldview, Katie reminded me to define the scale—specifically, how many locations I want to support. She also asked about my plan for getting articles, which, like Christina, she suggested could start with an existing dataset.


## Feedback Digestion

The critiques helped me focus on a specific audience and develop a clear scope for each project. For example, Worldview was flagged by my peers as needing a specific regional focus. They suggested getting a reliable, data-rich dataset before expanding. Christina and Katie stressed the need for an existing dataset to avoid getting overwhelmed from the start. Naimah and Katie also asked how certain features, like the color picker and Worldview, would work on mobile, which made me think about responsive layouts and user flow.

For my next design, I’m going to use the feedback on the Advanced Color Picker feature. This is going to be a tough but exciting design choice because it requires both a precise visual touch and careful handling of fine-tune user input. Naimah’s point about making sure it works well on mobile screens will be super important for this iteration. It means thinking about how to interact with the picker for smaller screens without losing its usability. Katie’s feedback on giving clear visual feedback for the user’s changes will help me make the picker’s sliders and segmented controls more precise, so users can see exactly how each adjustment affects the colors in real-time.

By focusing on the Advanced Color Picker, I can tackle a complex design and technical problem that matches my skills and goals as a designer. By addressing these critiques, I can show both my artistic sense and technical skills. The design will ultimately show my commitment to making visual interactions accessible and thoughtful, which is a strong foundation for this project in my portfolio.


