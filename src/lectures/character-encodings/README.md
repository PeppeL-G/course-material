---
sidebar: auto
navbarTitle: Character Encodings
---

# Character Encodings
Computers only understand bits, right? Then how can they display and work with text? Let's find out!

<iframe width="560" height="314" src="https://www.youtube.com/embed/z0cSH2t8Hhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Lecture material
* [character-encodings.pdf](character-encodings.pdf)
* [character-encodings.pptx](character-encodings.pptx)

## Recommended reading
* [Character encodings for beginners](https://www.w3.org/International/questions/qa-what-is-encoding)
* [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
* [ascii-code.com](https://www.ascii-code.com/)
    * Don't learn anything by heart, but look at the table at least once.

## Character Encodings
Computer programs are pretty good at displaying text on the screen. A good example of that is this text you are currently reading 😀 But even though computers are good at displaying text on the screen, they can't actually store any text/characters in their memory, only numbers (or rather combinations of bits that represent different numbers). So how do they deal with this problem? Well, each type of character (`a`, `b`, `c` etc.) is mapped to a number (like `97`, `98`, `99` etc.), and they store the number the characters is mapped to. Then when the character needs to be printed on the screen, the computer will print the character the number represents. An example of this is shown in <FigureNumber /> below.

<Figure caption="A program in C printing 'Peter' on the screen.">

```c
#include <stdio.h>

int main(){
    string name = "Peter"; // This will actually store the numbers 80, 101, 116, 101 and 114.
    printf(name); // Here the printf() function receives the numbers 80, 101, 116, 101 and 114, but it will print the characters they represent instead of the numbers (P, e, t, e and r).
    return 0;
}
```
</Figure>

An interesting question is: *Which characters are mapped to which numbers?* Unfortunately, the answer to this question is a bit more complicated than it would need to be these days, and this is also the reason why programmers needs to be aware of character encodings at all.

### Charset VS Character Encoding
A *charset* (also known as *character set*) is a set of characters. For example, we could define the charset `plocko` as the set of the characters `a`, `b` and `c`.

A *character encoding* is the mapping of the characters in a charset into numbers. For example, the `plocko` charset could be mapped according to the table shown in in <FigureNumber /> below.

<Figure caption="One way to map the characters in the plocko charset into numbers.">

| Number | Character |
|:-:|:-:|
| 1 | a |
| 2 | b |
| 3 | c |

</Figure>

For one charset, there can exist multiple different character encodings. For example, the `plocko` charset could be mapped according to the table shown in in <FigureNumber /> below instead.

<Figure caption="Another way to map the characters in the plocko charset into numbers.">

| Number | Character |
|:-:|:-:|
| 1 | b |
| 2 | a |
| 3 | c |

</Figure>

It's always important to use the correct name on things to avoid confusion. Unfortunately, many programmers treat charsets and characters encoding as one and the same things. For example, in Java, the [StandardCharsets](https://docs.oracle.com/javase/8/docs/api/java/nio/charset/StandardCharsets.html) class exists, but it rather defines character encodings. It's the same with [the `charset` header in HTTP](https://www.w3.org/International/articles/http-charset/index); it specify which character encoding to use, and not the charset.

Please contribute to a better world by using the correct name on things, instead of making it harder for the rest of us.

::: warning Not a big problem
In practice it's not a big deal that some confuse charsets with character encodings, and vice versa, because most often each charset only have one character encoding.
:::

### The problem with character encodings
Each time you write some text, it will be written using a character encoding, so the computer knows which number each character you type should be mapped to. If you store the text (the numbers your typed characters have been mapped to) in a file and later wants to open the file to read the text, it's crucial that the computer uses the same character encoding to map the numbers back into characters, otherwise the wrong characters will be displayed on the screen after opening the file. This problem also exists when you send a file or a mail to a friend.

So it's crucial that one and the same text uses the same character encoding all the time. Unfortunately, there exists many different character encodings, and often the text/file itself doesn't contain any information about which character encoding that was used to create it, so sometimes files are opened with the wrong character encoding, and it displays characters that don't make sense. A common way to discover that the wrong character encoding has been used somewhere is that the text contains the `�` symbol or simply is unreadable.

### ASCII
As computers have evolved, so have different character encodings. The earliest de facto standard character encoding was *American Standard Code for Information Interchange* (ASCII). In this encoding, each character is mapped to a 7 bits number, so it can map 2⁷ = 128 different characters to a number (between 0 and 127). The table in <FigureNumber /> below shows the mapping.

<Figure caption="The ASCII character encoding.">
<table>
<thead>
	<tr><th>Number</th><th>Character</th></tr>
</thead>
<tbody>
	<tr><td>0-31</td><td>Control characters (not displayed on the screen but used to control how machines works (kind of)).</td></tr>
	<tr><td>32</td><td>(space)</td></tr>
	<tr><td>33</td><td>!</td></tr>
	<tr><td>34</td><td>"</td></tr>
	<tr><td>35</td><td>#</td></tr>
	<tr><td>36</td><td>$</td></tr>
	<tr><td>37</td><td>%</td></tr>
	<tr><td>38</td><td>&amp;</td></tr>
	<tr><td>39</td><td>'</td></tr>
	<tr><td>40</td><td>(</td></tr>
	<tr><td>41</td><td>)</td></tr>
	<tr><td>42</td><td>*</td></tr>
	<tr><td>43</td><td>+</td></tr>
	<tr><td>44</td><td>,</td></tr>
	<tr><td>45</td><td>-</td></tr>
	<tr><td>46</td><td>.</td></tr>
	<tr><td>47</td><td>/</td></tr>
	<tr><td>48</td><td>0</td></tr>
	<tr><td>49</td><td>1</td></tr>
	<tr><td>50</td><td>2</td></tr>
	<tr><td>51</td><td>3</td></tr>
	<tr><td>52</td><td>4</td></tr>
	<tr><td>53</td><td>5</td></tr>
	<tr><td>54</td><td>6</td></tr>
	<tr><td>55</td><td>7</td></tr>
	<tr><td>56</td><td>8</td></tr>
	<tr><td>57</td><td>9</td></tr>
	<tr><td>58</td><td>:</td></tr>
	<tr><td>59</td><td>;</td></tr>
	<tr><td>60</td><td>&lt;</td></tr>
	<tr><td>61</td><td>=</td></tr>
	<tr><td>62</td><td>&gt;</td></tr>
	<tr><td>63</td><td>?</td></tr>
	<tr><td>64</td><td>@</td></tr>
	<tr><td>65</td><td>A</td></tr>
	<tr><td>66</td><td>B</td></tr>
	<tr><td>67</td><td>C</td></tr>
	<tr><td>68</td><td>D</td></tr>
	<tr><td>69</td><td>E</td></tr>
	<tr><td>70</td><td>F</td></tr>
	<tr><td>71</td><td>G</td></tr>
	<tr><td>72</td><td>H</td></tr>
	<tr><td>73</td><td>I</td></tr>
	<tr><td>74</td><td>J</td></tr>
	<tr><td>75</td><td>K</td></tr>
	<tr><td>76</td><td>L</td></tr>
	<tr><td>77</td><td>M</td></tr>
	<tr><td>78</td><td>N</td></tr>
	<tr><td>79</td><td>O</td></tr>
	<tr><td>80</td><td>P</td></tr>
	<tr><td>81</td><td>Q</td></tr>
	<tr><td>82</td><td>R</td></tr>
	<tr><td>83</td><td>S</td></tr>
	<tr><td>84</td><td>T</td></tr>
	<tr><td>85</td><td>U</td></tr>
	<tr><td>86</td><td>V</td></tr>
	<tr><td>87</td><td>W</td></tr>
	<tr><td>88</td><td>X</td></tr>
	<tr><td>89</td><td>Y</td></tr>
	<tr><td>90</td><td>Z</td></tr>
	<tr><td>91</td><td>[</td></tr>
	<tr><td>92</td><td>\</td></tr>
	<tr><td>93</td><td>]</td></tr>
	<tr><td>94</td><td>^</td></tr>
	<tr><td>95</td><td>_</td></tr>
	<tr><td>96</td><td>`</td></tr>
	<tr><td>97</td><td>a</td></tr>
	<tr><td>98</td><td>b</td></tr>
	<tr><td>99</td><td>c</td></tr>
	<tr><td>100</td><td>d</td></tr>
	<tr><td>101</td><td>e</td></tr>
	<tr><td>102</td><td>f</td></tr>
	<tr><td>103</td><td>g</td></tr>
	<tr><td>104</td><td>h</td></tr>
	<tr><td>105</td><td>i</td></tr>
	<tr><td>106</td><td>j</td></tr>
	<tr><td>107</td><td>k</td></tr>
	<tr><td>108</td><td>l</td></tr>
	<tr><td>109</td><td>m</td></tr>
	<tr><td>110</td><td>n</td></tr>
	<tr><td>111</td><td>o</td></tr>
	<tr><td>112</td><td>p</td></tr>
	<tr><td>113</td><td>q</td></tr>
	<tr><td>114</td><td>r</td></tr>
	<tr><td>115</td><td>s</td></tr>
	<tr><td>116</td><td>t</td></tr>
	<tr><td>117</td><td>u</td></tr>
	<tr><td>118</td><td>v</td></tr>
	<tr><td>119</td><td>w</td></tr>
	<tr><td>120</td><td>x</td></tr>
	<tr><td>121</td><td>y</td></tr>
	<tr><td>122</td><td>z</td></tr>
	<tr><td>123</td><td>{</td></tr>
	<tr><td>124</td><td>|</td></tr>
	<tr><td>125</td><td>}</td></tr>
	<tr><td>126</td><td>~</td></tr>
	<tr><td>127</td><td>DELETE (control character)</td></tr>
</tbody>
</table>
</Figure>

Although ASCII contains most characters Americans use and can be used within America without problem, it's not optimal for the rest of the world. For example, here in Sweden we also have the characters `å`, `ä`, `ö`, `Å`, `Ä` and `Ö` in our alphabet, but we can't use these characters in this character encoding. We usually solved that by using `a`, `o`, `A` and `O` instead, and hoped the reader would understand that we actually meant the other characters, but it was not a particular good solution.

Computers usually work in units of bytes (8 bits), so characters stored in ASCII usually wastes one bit. With that extra bit, 128 additional characters could be used (mapped to numbers 128 - 255).
To use that extra bit, new character encodings were created that extended ASCII, meaning that the numbers 0-127 mapped to the same characters as in ASCII, but the numbers 128-255 are mapped to entirely new characters.

### ISO Latin-1
*ISO Latin-1* is one of the character encodings that extends ASCII. It's commonly used in Europe since it contains some extra characters that are used in many European countries. <FigureNumber /> below shows some of these extra characters.

<Figure caption="Parts of the ISO Latin-1 character encoding.">
<table>
<thead>
	<tr><th>Number</th><th>Character</th></tr>
</thead>
<tbody>
	<tr><td>0-127</td><td>Same as in ASCII.</td></tr>
	<tr><td>163</td><td>£</td></tr>
	<tr><td>196</td><td>Ä</td></tr>
	<tr><td>197</td><td>Å</td></tr>
	<tr><td>214</td><td>Ö</td></tr>
	<tr><td>220</td><td>Ü</td></tr>
	<tr><td>223</td><td>ß</td></tr>
	<tr><td>228</td><td>ä</td></tr>
	<tr><td>229</td><td>å</td></tr>
	<tr><td>246</td><td>ö</td></tr>
</tbody>
</table>
</Figure>

This character encoding has been heavily used here in Sweden, because we can use all of our special characters in it.

### ISO Latin-2
*ISO Latin-2* is an example of another character encoding extending ASCII. <FigureNumber /> below shows some of the extra characters it adds.

<Figure caption="Parts of the ISO Latin-2 character encoding.">
<table>
<thead>
	<tr><th>Number</th><th>Character</th></tr>
</thead>
<tbody>
	<tr><td>0-127</td><td>Same as in ASCII.</td></tr>
	<tr><td>163</td><td>Ł</td></tr>
	<tr><td>196</td><td>Ä</td></tr>
	<tr><td>197</td><td>Å</td></tr>
	<tr><td>214</td><td>Ö</td></tr>
	<tr><td>220</td><td>Ü</td></tr>
	<tr><td>223</td><td>ß</td></tr>
	<tr><td>228</td><td>ä</td></tr>
	<tr><td>229</td><td>å</td></tr>
	<tr><td>246</td><td>ö</td></tr>
</tbody>
</table>
</Figure>

::: tip Example
As you can see, ISO Latin-2 is quite similar to ISO Latin-1. One difference is that the number 163 maps to different characters. So if one would save the text `Ä£Ö` in ISO Latin-1 and then open it in ISO Latin-2, it would display `ÄŁÖ`! This is a good example of why it's important to save the text and open it using the same character encoding.
:::

### Other extensions to ASCII
In addition to ISO Latin-1 and ISO Latin-2, there exists many other character encodings that extends ASCII. One of them is *Windows-1252*, another one is *Windows-1250*, etc.

### Unicode
It is quite hard to work with text when you need to keep track of which character encoding to use. The *Unicode* project was started to solve this problem. It defines a charset that contains as good as all characters in the world, as well as several different character encodings that maps the characters to numbers.

#### UTF-32
In the character encoding *UTF-32*, each character is mapped to a 32 bit (4 bytes) number. This makes it easy to understand how it works, but each character takes 4 times more space compared to ASCII. Therefore this character encoding is rarely used.

#### UTF-8
In the character encoding *UTF-8*, each character is mapped to 8 bits (1 byte), 16 bits (2 bytes), 24 bits (3 bytes) or 32 bits (4 bytes). The characters used in ASCII (the most commonly used characters) are mapped to 8 bits the very same way as in ASCII, so UTF-8 is backward compatible with ASCII (you can save a text in ASCII and then open it in UTF-8 and read it correctly). The less commonly used characters are mapped to 16, 24 or 32 bits. This way the size of the text is still quite small (since the most common characters only takes 8 bits), and it's still possible to use all the less commonly used characters in the text.

The downside with UTF-8 compared to UTF-32 is that the text is a bit harder to process, since each character is implemented with either 1, 2, 3 or 4 bytes. For example, to figure out how many characters a string in UTF-32 contains, you just need to divide the number of bytes in it by 4. In UTF-8 you need to go through the string byte by byte and count each character you come across, which takes more time.

### Which encoding to use?
These days you should most often use UTF-8. It's the default encoding used in more and more applications. Optimally, everyone would use the same character encoding, but today there still exists many old applications that use ASCII or one of the character encodings extending ASCII, so you still need to be aware of character encodings when you work with those applications. 