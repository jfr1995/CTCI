def isUnique(str)
    myArray = str.downcase.chars
    myHash = Hash.new(0)
    myArray.each do |i|
      myHash[i] += 1
      if myHash[i] > 1 
        return false 
      end
    end 
    return true 
  end 
  
  # implement an algorithm to determine if a string is a permuation of the other 
  
  def isPermutation(str1, str2)
    if str1.delete(' ').length != str2.delete(' ').length
      return false 
    end 
    array1 = str1.downcase.chars
    array2 = str2.downcase.chars
    myHash = Hash.new(0)
    # loop 1 
    array1.each do |i|
      myHash[i] += 1
    end
  
  
   # loop 2 
    array2.each do |j|
      myHash[j] -= 1
    end
  
  
    # loop 3 
    myHash.each do |_, val|
      if val != 0
        return false 
      end 
    end 
    return true 
  end
  
  
  def urlify(url)
    url_array = url.split(" ")
    _new_url = ""
    _len = url_array.length - 2
    for i in 0.._len
      _new_url += url_array[i] + "%20"
    end 
    _new_url += url_array[url_array.length - 1]
    puts "#{_new_url}"
  end 
  
  
  def palindrome_permuatation(str)
    arr = str.delete(" ").downcase.chars
    myHash = Hash.new(0)
    odd_flag = 0 
    arr.each do |i|
      myHash[i] += 1 
    end 
    if arr.length % 2 == 0 
      myHash.each do |_ , val|
        if val != 2 
          return false
        end 
      end
    else 
      myHash.each do |_, val|
        if val != 2 
          odd_flag += 1
        end 
        if odd_flag > 1 
          return false 
        end 
      end
    
    end 
    return true 
  end 
  
  def oneAway(main, str)
    myHash = Hash.new(false)
    edits = 0 
    diff = (main.length - str.length).abs
    longer_string = main.length > str.length ? main.chars : str.chars
    shorter_string = main.length > str.length ? str.chars : main.chars
    if diff > 1 
      return false 
    end 
    shorter_string.each do |i|
      myHash[i] = true 
    end
    
    longer_string.each do |i|
      if myHash[i] == false 
        edits += 1
      end 
    end 
  
    if edits > 1 
      return false 
    end 
    return true
  end 
  


def most_common_letter(string)
  myHash = Hash.new(0)
  str_array = string.chars 
  most_common = str_array[0]
  str_array.each do |i|
    myHash[i] += 1
  end 
  #iterate hash 
  myHash.each do |key, val|
    if val > myHash[most_common]
      most_common = key
    end 
  end
  puts "#{most_common}"
  return most_common
end
# diagnol diff of a N x N matrix 
def diagonalDifference(arr)
  left_to_right = 0 
  right_to_left = 0 

  length = arr.length - 1 
  for i in 0..length 
      left_to_right += arr[i][i]
  end 
  j = 0 
  for i in length.downto(0)
      right_to_left += arr[i][j]
      j+= 1
  end 
  
  
  return (right_to_left - left_to_right).abs
end



# Complete the plusMinus function below.
def plusMinus(arr)
  positive = 0 
  negative = 0 
  zero = 0 
  length = (arr.length ).to_f
  
  arr.each do |i|
      if i > 0 
          positive += 1 
      elsif i < 0 
          negative += 1 
      else 
          zero += 1 
      end 
  end 
  ar = []
  ar.push(positive.to_f/length)  
  ar.push(negative.to_f/length)  
  ar.push(zero.to_f/length)    
  puts(ar)
  return ar
end

# Complete the staircase function below.
def staircase(n)
  1.upto(n) { |i| puts ('#' * i).rjust(n) }
end




def greatest_common_factor(number1, number2)
  gcf = 1
  smallest = number1 > number2 ? number2 : number1 
  for i in 1..smallest
    if (number1 % i == 0) and (number2 % i == 0)
      gcf = i
    end 
  end 
  return gcf
end

def palindrome?(string)
  return string == string.reverse
end

def longest_palindrome(string)
    if palindrome?(string)
      return string 
    end 
    longest = ""
    length = string.length  - 1
    for i in 0..length
      for j in (i+1)..length 
        test = string.slice(i, j)
        puts("#{test.length}, #{longest.length}")
        if ((palindrome?(test)) and (test.length > longest.length))
          longest = string.slice(i, j)
        end 
      end 
    end  
    puts(longest)
    return longest
end