let dirtyChecking = [];
export const validationRules = {
  common: {
    required: true,
    message: {
      empty: "This field is required.",
    },
  },
  firstName: {
    pattern: /^[a-z ,'-]+$/i, //Alphanumeric string
    required: true,
    message: {
      empty: "We need your first name.",
      invalid: "Invalid first name.",
    },
  },
  text: {
    pattern: new RegExp(/^([A-Za-z ]+|[\u0600-\u06FF ]+)$/), //Alphanumeric string
    required: false,
    message: {
      empty: "This filed is required .",
      invalid: "Invalid value ",
    },
  },
  identityNumber: {
    pattern: new RegExp(/^[0-9]{11}$/), //Alphanumeric string
    required: false,
    message: {
      empty: "  رقم الهوية فارغ ",
      invalid: "رقم هوية غير صحيح ",
    },
  },
  //
  lastName: {
    pattern: /^[a-z ,'-]+$/i, //Alphanumeric string
    required: true,
    message: {
      empty: "We need your last name.",
      invalid: "Invalid last name.",
    },
  },
  name: {
    pattern: /^[a-z ,.'-]+$/i, //Alphanumeric string
    required: false,
    message: {
      invalid: "Invalid value",
    },
  },
  username: {
    pattern: /^[a-z0-9_-]{3,16}$/, //Alphanumeric string that may include _ and – having a length of 3 to 16 characters.
    required: true,
    message: {
      empty: "Username is required",
      invalid: "Username is invalid",
    },
  },
  password: {
    pattern: new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*_\-+=`|\\(){}\[\]:;"'<>,.?\/]).{8,}$/
    ),
    // required: true,
    message: {
      invalid:
        "Password must be at least 8 characters long and contain at least one number, letter and special character",
    },
  },
  chartNumber: {
    pattern: new RegExp(/^[\u0600-\u06FF]\/\d+$/),
    required: false,
    message: {
      // empty: "الحد الادني لرقم المخطط 4 ارقام",
      invalid: "  برجاء ادخال رقم مخطط صحيح",
    },
  },

  licenseNumber: {
    pattern: new RegExp(/^[0-9]{11}$/),
    required: false,
    message: {
      // empty: "الحد الادني لرقم المخطط 4 ارقام",
      invalid: "  برجاء ادخال رقم رخصة صحيح",
    },
  },
  licenseDeed: {
    pattern: new RegExp(/^([A-Za-z ]+|[\u0600-\u06FF ]+)$/),
    required: false,
    message: {
      // empty: "الحد الادني لرقم الرخصة 4 ارقام",
      invalid: "  برجاء ادخال سند رخصة صحيح",
    },
  },
  taxNumber: {
    pattern: new RegExp(/^\d{12,}$/),
    required: false,
    message: {
      // empty: "الحد الادني لرقم الشهادة 4 ارقام",
      invalid: "  برجاء ادخال رقم شهادة  صحيح",
    },
  },
  password_optional: {
    pattern: new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*_\-+=`|\\(){}\[\]:;"'<>,.?\/]).{8,}$/
    ),

    // required: false,
    message: {
      invalid:
        "Password must be at least 8 characters long and contain at least one number, letter and special character",
    },
  },
  repassword: {
    pattern: new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*_\-+=`|\\(){}\[\]:;"'<>,.?\/]).{8,}$/
    ),
    required: false,
    message: {
      invalid:
        "Password must be at least 8 characters long and contain at least one number, letter and special character",
    },
  },
  email: {
    pattern: new RegExp(/^\w+([-+.']\w+)*@[A-Za-z\d]+\.com$/i),
    // required: true,
    message: {
      // empty: "",
      invalid: " name@example.com برجاء ادخال ايميل صالح مثل  ",
    },
  },
  KSAPhone: {
    pattern: new RegExp(/^(?:\+966|00966|0)([56789]\d{8})$/),
    // required: true,
    message: {
      empty: "Phone number is required",
      invalid: "Invalid phone number",
    },
  },
  // /^[\u0600-\u06FF0-9]+$/
  pieceNumber: {
    pattern: /^[\u0600-\u06FF0-9]+$/,
    required: false,
    message: {
      empty: "piece Number is required",
      invalid: "Invalid piece number",
    },
  },
  phone: {
    pattern: /^\d{4,14}$/,
    required: false,
    message: {
      empty: "Phone number is required",
      invalid: "Invalid phone number",
    },
  },
  phoneControl: {
    pattern: /^((?!(0))[0-9]+)$/,
    required: false,
    message: {
      empty: "Phone number is required",
      invalid: "Invalid phone number",
    },
  },
  checked: {
    required: false,
    check: true,
    message: {
      empty: "You need to read and accept",
    },
  },
  select: {
    required: true,
    check: true,
  },
  date: {
    date: true,
    required: false,
    message: {
      empty: "Date is required",
      invalid: "Date is invalid",
    },
  },
  textInput: {
    pattern: /[A-Za-z0-9]/,
  },
  numberInput: {
    pattern: /^\d*\.?\d*$/,
    message: {
      invalid: "Value is invalid",
    },
  },
  positiveNumber: {
    pattern: /^1*[1-9][0-9]*$/,
    message: {
      invalid: "Value is invalid",
    },
  },
  number: {
    pattern: /^\d*\.?\d*$/,
    // required: true,
    message: {
      // empty: 'Filed is required',
      invalid: "Value is invalid",
    },
  },
  positiveInteger: {
    pattern: /^\d*$/,
    message: {
      invalid: "Value is invalid",
    },
  },
  uniqueIdentifier: {
    required: false,
  },
};

const isDate = (str) => !isNaN(Date.parse(str));
export const isString = (str) => typeof str === "string";

const prepareValidationObj = (rule) => {
  let validationRuleObj = "";

  if (typeof rule === "object" && rule !== null) {
    if (rule.type && validationRules[rule.type]) {
      validationRuleObj = { ...validationRules[rule.type], ...rule };
    } else {
      validationRuleObj = rule;
    }
  } else {
    validationRuleObj = validationRules[rule];
  }

  return validationRuleObj;
};

export default function (rule, value, reset = false) {
  let message = null,
    valid = true,
    required = false;

  const validationRuleObj = prepareValidationObj(rule);

  if (validationRuleObj && !reset) {
    let defaultConstraints = validationRules.common;
    let constraints = validationRuleObj;
    let checkValue = value;
    required = constraints.required;

    if (constraints.pattern) {
      const trimmedValue = isString(value) ? value.trim() : value;
      valid = constraints.pattern.test(trimmedValue);
    } else if (constraints.check && constraints.required) {
      valid = isString(value) ? value.trim() !== "" : !!value;
    } else if (constraints.date) {
      valid = isDate(value);
    } else if (rule === "fileReq") {
      valid = value.length > 0;
      checkValue = value.length;
    }

    if (constraints.min) {
      valid = constraints.pattern.test(value) && value >= constraints.min;
    }

    if (constraints.max) {
      valid = constraints.pattern.test(value) && value <= constraints.max;
    }

    if (constraints.min && constraints.max) {
      valid =
        constraints.pattern.test(value) &&
        value >= constraints.min &&
        value <= constraints.max;
    }

    if (checkValue) {
      message =
        (constraints.message && constraints.message.invalid) ||
        defaultConstraints.message.invalid;
      !dirtyChecking.includes(rule) && dirtyChecking.push(rule);
    } else {
      if (!required) {
        valid = true;
      } else if (required && !constraints.check && !checkValue) {
        valid = false;
      }
      message =
        (constraints.message && constraints.message.empty) ||
        defaultConstraints.message.empty;
    }
  }

  return {
    message,
    valid,
    required,
    dirty: dirtyChecking.includes(rule),
  };
}
