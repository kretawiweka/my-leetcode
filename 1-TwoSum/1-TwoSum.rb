# Last updated: 4/8/2026, 2:09:24 AM
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    return get_two_sum(nums, target)
end

# nums.each_with_index do |num, index|
#     result = target - num
#     position = nums.index(result)
#     return [index, position] if position && (position != index)
# end

def get_two_sum(nums, target)    
    for i in 0...nums.length
        second_value = target - nums[i]
        second_index = nums.index(second_value)
        
        if second_value != nil and second_index != nil and (second_index != i)
            if (i < second_index)
                return [i, second_index]
            end
            return [second_index, i]
        end
    end        
    # return true
end

# def find_index (nums, target, start_with)
#     for i in start_with..nums.length-1       
#         p "#{nums[i]} == #{target}"
#         if nums[i] == target
#             return i
#         end
#     end
#     return nil
# end


 # for (let i = 0; i < nums.length; i++){
 #        let secondValue = target - nums[i]
 #        let secondIndex = nums.indexOf(secondValue, i+1)        
 #        if (secondIndex !== -1 && secondIndex !== i) {
 #            if (i < secondIndex) {
 #                return [i, secondIndex]
 #            }
 #            return [secondIndex, i]
 #        }
 #    }