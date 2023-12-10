# app/views/medication_api.py
from flask import Blueprint, request, jsonify, Response, send_file
from app.models.medication import Medication
from app.database import db
from app.util.create_pdf import create_pdf, generate_pdf_file

medication_api_bp = Blueprint('medication_api', __name__)


@medication_api_bp.route('/', methods=['GET'])
def get_medications():
    medications = Medication.query.all()
    return jsonify([medication.serialize() for medication in medications])

@medication_api_bp.route('/<int:medication_id>', methods=['GET'])
def get_medication(medication_id):
    medication = Medication.query.get_or_404(medication_id)
    return jsonify(medication.serialize())

@medication_api_bp.route('/pdf/<int:medication_id>', methods=['GET'])
def get_medication_download_pdf(medication_id):
    medication = Medication.query.get_or_404(medication_id)
    pdf_file = generate_pdf_file(medication.serialize())
    return send_file(pdf_file, as_attachment=True, download_name='download.pdf')
    
@medication_api_bp.route('/savepdf/<int:medication_id>', methods=['GET'])
def get_medication_save_pdf(medication_id):
    medication = Medication.query.get_or_404(medication_id)
    filename=medication.serialize()["drug_name"]+".pdf";
    create_pdf(filename,medication.serialize())
    return "",200


@medication_api_bp.route('/', methods=['POST'])
def add_medication():
    data = request.json
    new_medication = Medication(**data)
    db.session.add(new_medication)
    db.session.commit()
    return jsonify({'message': 'Medication added successfully'})

@medication_api_bp.route('/<int:medication_id>', methods=['DELETE'])
def delete_medication(medication_id):
    medication = Medication.query.get_or_404(medication_id)
    db.session.delete(medication)
    db.session.commit()
    return jsonify({'message': 'Medication deleted successfully'})
