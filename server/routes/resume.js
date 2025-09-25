import express from "express";
import PDFDocument from "pdfkit";
const router = express.Router();

router.post("/generate", async (req, res) => {
  try {
    const {
      name = "",
      email = "",
      phone = "",
      linkedin = "",
      github = "",
      skills = [],
      experience = [],
      education = [],
    } = req.body;

    const doc = new PDFDocument({ margin: 50 });
    let buffers = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      const pdfData = Buffer.concat(buffers);
      res
        .writeHead(200, {
          "Content-Type": "application/pdf",
          "Content-Disposition": "attachment;filename=resume.pdf",
          "Content-Length": pdfData.length,
        })
        .end(pdfData);
    });

    // === Border around resume ===
    doc.lineWidth(2) // thickness
      .strokeColor("#1dbf73") // green border
      .rect(20, 20, doc.page.width - 40, doc.page.height - 40) // x, y, width, height
      .stroke();

    // === Resume Layout ===
    doc.moveDown(1.5);
    doc.fontSize(22).fillColor("#333").text(name, { align: "center", underline: true });
    doc.moveDown(0.5);
    doc.fontSize(12).fillColor("#555").text(`Email: ${email}`, { align: "center" });
    if (phone) doc.text(`Phone: ${phone}`, { align: "center" });
    if (linkedin) doc.text(`LinkedIn: ${linkedin}`, { align: "center", link: linkedin, underline: true });
    if (github) doc.text(`GitHub: ${github}`, { align: "center", link: github, underline: true });

    doc.moveDown();

    // Sections
    if (experience.length) {
      doc.fontSize(16).fillColor("#1dbf73").text("Experience", { underline: true });
      doc.moveDown(0.5);
      experience.forEach((exp) => doc.fontSize(12).fillColor("#000").text(`• ${exp}`));
      doc.moveDown();
    }

    if (education.length) {
      doc.fontSize(16).fillColor("#1dbf73").text("Education", { underline: true });
      doc.moveDown(0.5);
      education.forEach((edu) => doc.fontSize(12).fillColor("#000").text(`• ${edu}`));
      doc.moveDown();
    }

    if (skills.length) {
      doc.fontSize(16).fillColor("#1dbf73").text("Skills", { underline: true });
      doc.moveDown(0.5);
      skills.forEach((skill) => doc.fontSize(12).fillColor("#000").text(`• ${skill}`));
      doc.moveDown();
    }

    doc.end();
  } catch (err) {
    res.status(500).json({ error: "Error generating resume" });
  }
});

export default router;
