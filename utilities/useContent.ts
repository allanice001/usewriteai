import accountJson from '../content/account.json';
import footerJson from '../content/footer.json';
import forgotPasswordJson from '../content/forgot-password.json';
import indexJson from '../content/index.json';
import navigationJson from '../content/navigation.json';
import signInJson from '../content/sign-in.json';
import signUpJson from '../content/sign-up.json';
import termsJson from '../content/terms.json';
import dashboardJson from '../content/dashboard.json';
import fourZeroFourJson from '../content/404.json';

const useContent = (content: string) => {
    const keys = content.split('.');
    const contentFileName = keys.shift();

    const getContentFile = (contentFileName?: string) => {
        switch (contentFileName) {
            case 'account':
                return accountJson;
            case 'footer':
                return footerJson;
            case 'forgot-password':
                return forgotPasswordJson;
            case 'index':
                return indexJson;
            case 'navigation':
                return navigationJson;
            case 'sign-in':
                return signInJson;
            case 'sign-up':
                return signUpJson;
            case 'terms':
                return termsJson;
            case 'dashboard':
                return dashboardJson;
            case '404':
                return fourZeroFourJson;
            default:
                return null;
        }
    };

    let currentValue: any = getContentFile(contentFileName);

    if (!currentValue) return '';

    for (const key of keys) {
        if (!currentValue.hasOwnProperty(key)) return '';
        if (typeof currentValue === 'object' && currentValue !== null && key in currentValue) {
            currentValue = currentValue[key];
        } else {
            return currentValue;
        }
    }

    return currentValue;
};

export default useContent;
