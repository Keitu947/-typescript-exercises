class Calculator {
    // Validate if the input is a number
    private validateNumber(input: any): boolean {
        return typeof input === 'number' && !isNaN(input);
    }

    add(a: number, b: number): number {
        if (this.validateNumber(a) && this.validateNumber(b)) {
            return a + b;
        } else {
            throw new Error("Invalid input");
        }
    }

    subtract(a: number, b: number): number {
        if (this.validateNumber(a) && this.validateNumber(b)) {
            return a - b;
        } else {
            throw new Error("Invalid input");
        }
    }

    multiply(a: number, b: number): number {
        if (this.validateNumber(a) && this.validateNumber(b)) {
            return a * b;
        } else {
            throw new Error("Invalid input");
        }
    }

    divide(a: number, b: number): number {
        if (this.validateNumber(a) && this.validateNumber(b)) {
            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return a / b;
        } else {
            throw new Error("Invalid input");
        }
    }
}
