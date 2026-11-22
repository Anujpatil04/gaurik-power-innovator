# Gaurik Power Innovators — Premium Website

A responsive Flask website starter for Gaurik Power Innovators.

## Included
- Python Flask application
- Responsive premium landing page
- Services, industries, project showcase, products and contact sections
- Mobile navigation
- WhatsApp enquiry form (opens WhatsApp with a pre-filled message)
- Basic SEO metadata, Organization structured data, sitemap and robots.txt
- Custom 404 page

## Run locally (Windows)

1. Install Python 3.10 or newer from https://www.python.org/downloads/
2. Extract this ZIP.
3. Open Command Prompt in the extracted project folder.
4. Create a virtual environment:

   ```bat
   py -m venv .venv
   .venv\Scripts\activate
   ```

5. Install packages:

   ```bat
   pip install -r requirements.txt
   ```

6. Start the website:

   ```bat
   py app.py
   ```

7. Open http://127.0.0.1:5000 in your browser.

## Before publishing

- Replace `gaurikpower.in` in `templates/index.html`, `robots.txt` and `sitemap.xml` with the real domain.
- Add real, approved project and product photographs. The project visuals are design placeholders, not photographs of completed GPI work.
- Confirm that the company name, service descriptions, phone number and email are correct.
- Add the business's real postal address and service area only after the owner confirms them.
- Create a Google Search Console property and submit `/sitemap.xml` after the domain is live.
- Use a production WSGI server. For a simple Windows host, Waitress can run the app with:

  ```bat
  waitress-serve --listen=0.0.0.0:8000 app:app
  ```

Do not deploy with Flask's built-in development server or `debug=True`.

## Important

This is the premium presentation website version. The enquiry form sends the visitor to WhatsApp; it does not store submissions in a database or provide an admin dashboard.
