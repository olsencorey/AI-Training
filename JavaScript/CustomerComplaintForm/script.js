function validateForm() {
  // Get all the values from the form
  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const orderNo = document.getElementById("order-no").value.trim();
  const productCode = document.getElementById("product-code").value.trim();
  const quantity = document.getElementById("quantity").value.trim();
  const complaintsChecked = Array.from(document.querySelectorAll("#complaints-group input[type='checkbox']:checked"));
  const complaintDescription = document.getElementById("complaint-description").value.trim();
  const solutionRadio = document.querySelector("#solutions-group input[type='radio']:checked");
  const solutionDescription = document.getElementById("solution-description").value.trim();

  // Field Validation Regex's
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderNoRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;

  // Validate each field
  const isFullName = fullName.length > 0;
  const isEmail = emailRegex.test(email);
  const isOrderNo = orderNoRegex.test(orderNo);
  const isProductCode = productCodeRegex.test(productCode);
  const isQuantity = Number.isInteger(parseInt(quantity, 10)) && parseInt(quantity, 10) > 0;
  const isComplaintsGroup = complaintsChecked.length > 0;
  const isComplaintDescription = complaintsChecked.some(c => c.value === "other") ? complaintDescription.length >= 20 : true;
  const isSolutionsGroup = !!solutionRadio;
  const isSolutionDescription = solutionRadio && solutionRadio.value === "other" ? solutionDescription.length >= 20 : true;

  return {
    "full-name": isFullName,
    "email": isEmail,
    "order-no": isOrderNo,
    "product-code": isProductCode,
    "quantity": isQuantity,
    "complaints-group": isComplaintsGroup,
    "complaint-description": isComplaintDescription,
    "solutions-group": isSolutionsGroup,
    "solution-description": isSolutionDescription
  };
}

function isValid(formObj) {
  return Object.values(formObj).every(value => value === true);
}

function setBorderColor(element, color) {
  element.style.borderColor = color;
}

function attachChangeHandlers() {
  const fields = ["full-name",
    "email",
    "order-no",
    "product-code",
    "quantity",
    "complaint-description",
    "solution-description"
  ];

  fields.forEach(id => {
    document.getElementById(id).addEventListener("change", function() {
      const valObj = validateForm();
      if (valObj[id]) {
        setBorderColor(this, "green");
      } else {
        setBorderColor(this, "red");
      }
    });
  });

  // complaint and solution groups
    document.getElementById("complaints-group").addEventListener("change", function() {
      const valObj = validateForm();
      setBorderColor(this, valObj["complaints-group"] ? "green" : "red");
      setBorderColor(document.getElementById("complaint-description"), valObj["complaint-description"] ? "green" : "red");
    });

    document.getElementById("solutions-group").addEventListener("change", function() {
      const valObj = validateForm();
      setBorderColor(this, valObj["solutions-group"] ? "green" : "red");
      setBorderColor(document.getElementById("solution-description"), valObj["solution-description"] ? "green" : "red");
    });
}

function highlightInvalidFields(valObj) {
  [
    "full-name",
    "email",
    "order-no",
    "product-code",
    "quantity",
    "complaint-description",
    "solution-description"  
  ].forEach(id => {
    setBorderColor(document.getElementById(id), valObj[id] ? "green" : "red");
  });

  // groups
  setBorderColor(document.getElementById("complaints-group"), valObj["complaints-group"] ? "green" : "red");
  setBorderColor(document.getElementById("solutions-group"), valObj["solutions-group"] ? "green" : "red");
}

document.addEventListener("DOMContentLoaded", function() {
  attachChangeHandlers();

  document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const valObj = validateForm();
    const valid = isValid(valObj);

    highlightInvalidFields(valObj);

    if (valid) {
      document.getElementById("message-box").textContent = "Form submitted successfully!";
    } else {
      document.getElementById("message-box").textContent = "Please correct the highlighted errors.";
    }
  })
})
