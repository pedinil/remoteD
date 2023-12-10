from reportlab.pdfgen import canvas
from io import BytesIO



def create_pdf(file_name, data):
    # Create a PDF document
    pdf = canvas.Canvas(file_name)

    # Add text to the PDF
    pdf.drawString(100, 800, "My PDF with Data")

    # Add data to the PDF
    y_position = 780
    for key, value in data.items():
        text = f"{key}: {value}"
        pdf.drawString(100, y_position, text)
        y_position -= 20

    # Save the PDF
    pdf.save()


def generate_pdf_file(data):
    buffer = BytesIO()
    p = canvas.Canvas(buffer)

     # Add text to the PDF
    p.drawString(100, 800, "My PDF with Data")

    # Add data to the PDF
    y_position = 780
    for key, value in data.items():
        text = f"{key}: {value}"
        p.drawString(100, y_position, text)
        y_position -= 20

    p.showPage()
    p.save()
 
    buffer.seek(0)
    return buffer


