# app/models/medication.py
from app.database import db

class Medication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    drug_name = db.Column(db.String(255), nullable=False)
    dosage = db.Column(db.Float, nullable=False)
    dosage_type = db.Column(db.String(10), nullable=False)
    route = db.Column(db.String(20), nullable=False)
    frequency = db.Column(db.String(20), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    medication_type = db.Column(db.String(20), nullable=False)
    refill = db.Column(db.Integer, nullable=False)
    notes = db.Column(db.Text)

    def serialize(self):
            return {
                'id': self.id,
                'drug_name': self.drug_name,
                'dosage': self.dosage,
                'dosage_type': self.dosage_type,
                'route': self.route,
                'frequency': self.frequency,
                'quantity': self.quantity,
                'medication_type': self.medication_type,
                'refill': self.refill,
                'notes': self.notes
            }