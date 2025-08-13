import pandas as pd
import matplotlib.pyplot as plt
from fpdf import FPDF
import os

def generate_graph_and_pdf(excel_file_path):
    df = pd.read_excel(excel_file_path)

    if not {'Estimated Date', 'Actual Date'}.issubset(df.columns):
        raise Exception("Excel must contain 'Estimated Date' and 'Actual Date' columns")

    df["Estimated Date"] = pd.to_datetime(df["Estimated Date"])
    df["Actual Date"] = pd.to_datetime(df["Actual Date"])
    df["Delay (days)"] = (df["Actual Date"] - df["Estimated Date"]).dt.days

    plt.figure(figsize=(8, 4))
    plt.bar(df.index, df["Delay (days)"])
    plt.title("Delivery Delay in Days")
    plt.xlabel("Delivery")
    plt.ylabel("Delay (days)")
    chart_path = "delay_chart.png"
    plt.tight_layout()
    plt.savefig(chart_path)
    plt.close()

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=14)
    pdf.cell(200, 10, txt="Delivery Delay Report", ln=True, align="C")
    pdf.image(chart_path, x=10, y=30, w=180)

    pdf.output("report.pdf")
    os.remove(chart_path)
