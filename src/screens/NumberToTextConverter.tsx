import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const NumberToTextConverter: React.FC = () => {
    const [number, setNumber] = useState<number>(0);
    const [words, setWords] = useState<string>("");

    const units: string[] = [
        "",
        "bir",
        "iki",
        "üç",
        "dört",
        "beş",
        "altı",
        "yedi",
        "sekiz",
        "dokuz",
        "on",
        "on bir",
        "on iki",
        "on üç",
        "on dört",
        "on beş",
        "on altı",
        "on yedi",
        "on sekiz",
        "on dokuz"
    ];

    const tens: string[] = [
        "",
        "",
        "yirmi",
        "otuz",
        "kırk",
        "elli",
        "altmış",
        "yetmiş",
        "seksen",
        "doksan"
    ];

    const scales: string[] = [
        "",
        "bin",
        "milyon",
        "milyar",
        "trilyon",
        "katrilyon",
        "kentilyon",
        "sekstilyon",
        "septilyon",
        "oktilyon",
        "nonilyon",
        "desilyon"
    ];

    function convertNumberToWords(num: number): string {
        if (num === 0) {
            return "sıfır";
        }

        let result = "";
        let currentNum = num;
        let scaleIndex = 0;

        while (currentNum > 0) {
            if (currentNum % 1000 !== 0) {
                const scaleWord = scales[scaleIndex];
                const threeDigitNum = currentNum % 1000;
                const threeDigitWords = convertThreeDigitNumberToWords(threeDigitNum);

                result = `${threeDigitWords} ${scaleWord} ${result}`;
            }

            currentNum = Math.floor(currentNum / 1000);
            scaleIndex++;
        }

        return result.trim();
    }

    function convertThreeDigitNumberToWords(num: number): string {
        let result = "";

        if (num >= 100) {
            result += `${units[Math.floor(num / 100)]} yüz `;
            num %= 100;
        }

        if (num >= 20) {
            result += `${tens[Math.floor(num / 10)]} `;
            num %= 10;
        }

        if (num > 0) {
            result += `${units[num]} `;
        }

        return result.trim();
    }
    const handleConvert = () => {
        const convertedWords = convertNumberToWords(number);
        setWords(convertedWords);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Bir sayı girin"
                keyboardType="numeric"
                value={number.toString()}
                onChangeText={(text) => setNumber(parseInt(text))}
            />
            <Button title="Dönüştür" onPress={handleConvert} />
            <Text style={styles.result}>{words}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default NumberToTextConverter;